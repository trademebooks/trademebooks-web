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
        List<Book> books = new ArrayList<>();

        bookRepository.findByTitleContaining(title).iterator().forEachRemaining(books::add);

        return books;
    }

    public Book getBookById(Long id) {
        return bookRepository.getBookById(id);
    }

}
