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

    public List<Book> getAllBooks() {
        List<Book> books = new ArrayList<>();
        booksRepository.findAll().forEach(books::add);
        return books;
    }

    public Book getBookById(String id) {
        Book book = booksRepository.getOne(id);
        return book;
    }

    public void createBook(Book book) {
        booksRepository.save(book);
    }

    public void updateBook(String id, Book book) {
        booksRepository.save(book);
    }

    public void deleteBook(String id) {
        booksRepository.deleteById(id);
    }
}
