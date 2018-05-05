package com.chosensolutions.services;

import com.chosensolutions.models.Book;
import com.chosensolutions.repositories.BooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class BookService {

    @Autowired
    private BooksRepository booksRepository;

    private List<Book> books = new ArrayList<>(
            Arrays.asList(
                    new Book("1", "Book1"),
                    new Book("2", "Book2"),
                    new Book("3", "Book3")
            )
    );

    // business services ar singletons
    // controllers can inject the SERVICE
    public List<Book> getAll() {
        List<Book> books = new ArrayList<>();
        booksRepository.findAll().forEach(books::add);
        return books;
    }

    public Book getById(String id) {
        /*
        Book book1 = null;
        for (Book book: books) {
            if (book.getId() == id) {
                book1 = book;
            }
        }

        return book1;
        */
        return books.stream().filter(book -> book.getId().equals(id)).findFirst().get();
    }

    public void create(Book book) {
        booksRepository.save(book);
    }

    public void update() {

    }

    public void delete() {

    }
}
