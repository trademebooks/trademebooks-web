package com.chosensolutions.services;

import com.chosensolutions.models.Book;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class BookService {

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
        books.add(book);
    }

    public void update() {

    }

    public void delete() {

    }
}
