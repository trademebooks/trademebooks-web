package com.chosensolutions.trademebooks.services.book;

import com.chosensolutions.trademebooks.models.Book;
import com.chosensolutions.trademebooks.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public List<Book> getAllBooks(String title) {
        return bookRepository.findByTitleContaining(title);
    }

    public Book getBookById(Long id) {
        return bookRepository.getBookById(id);
    }

    public Book createBook(Book book) {
        return bookRepository.save(book);
    }

    public Book updateBook(Book book) {
        return bookRepository.save(book);
    }

    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }

}
