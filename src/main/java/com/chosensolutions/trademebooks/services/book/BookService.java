package com.chosensolutions.trademebooks.services.book;

import com.chosensolutions.trademebooks.models.Book;
import com.chosensolutions.trademebooks.repositories.BooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class BookService {

    @Autowired
    private BooksRepository booksRepository;

    public List<Book> getAllBooks() {
        List<Book> books = new ArrayList<>();
        booksRepository.findAll().iterator().forEachRemaining(books::add);
        return books;
    }
}
