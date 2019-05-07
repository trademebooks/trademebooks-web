package com.chosensolutions.cusbe.services.book;

import com.chosensolutions.cusbe.models.Book;
import com.chosensolutions.cusbe.repositories.BooksRepository;
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
