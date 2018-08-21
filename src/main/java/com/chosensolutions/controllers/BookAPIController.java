package com.chosensolutions.controllers;

import com.chosensolutions.models.Book;
import com.chosensolutions.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RequestMapping("/api/v1/")
@RestController
public class BookAPIController {

    @Autowired
    private BookService bookService;

    @RequestMapping("/books")
    public List<Book> index() {
        return bookService.getAllBooks();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/books/{id}")
    public Book show(@PathVariable("id") String id) {
        return bookService.getBookById(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/books")
    public void create(@RequestBody Book book) {
        bookService.createBook(book);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/books/{id}")
    public void update(@PathVariable("id") String id, @RequestBody Book book) {
        bookService.updateBook(id, book);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/books/{id}")
    public void delete(@PathVariable("id") String id) {
        bookService.deleteBook(id);
    }
}
