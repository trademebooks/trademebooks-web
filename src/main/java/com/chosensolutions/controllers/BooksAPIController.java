package com.chosensolutions.controllers;

import com.chosensolutions.models.Book;
import com.chosensolutions.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RequestMapping("/api/v1/books")
@RestController
public class BooksAPIController {

    @Autowired
    private BookService bookService;

    @RequestMapping("/")
    public List<Book> index() {
        return bookService.getAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Book show(@PathVariable("id") String id) {
        return bookService.getById(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/")
    public void create(@RequestBody Book book) {
        bookService.create(book);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/update")
    public void update(@RequestBody Book book) {
        bookService.create(book);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/delete")
    public void delete(@RequestBody Book book) {
        bookService.create(book);
    }

}
