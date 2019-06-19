package com.chosensolutions.trademebooks.controllers.api;

import com.chosensolutions.trademebooks.models.Book;
import com.chosensolutions.trademebooks.services.book.BookService;
import org.springframework.web.bind.annotation.*;

import java.util.*;

//@CrossOrigin(origins = "http://localhost:3100", maxAge = 3600)
@RequestMapping("/api")
@RestController
public class BookAPIController {

    private BookService bookService;

    public BookAPIController(BookService bookService) {
        this.bookService = bookService;
    }

    @RequestMapping("/books")
    public List<Book> getAllBooks() {
        List<Book> books = bookService.getAllBooks();

        return books;
    }

    @RequestMapping("/auth/books")
    public List<Book> getAllAuthBooks() {
        System.out.println("all auth books");
        List<Book> theBooks = new ArrayList<>();

        return theBooks;
    }

/*    @RequestMapping(method = RequestMethod.GET, value = "/books/{id}")
    public Book show(@PathVariable("id") String id) {
        return bookService.getBookById(id);
    }*/

    @RequestMapping(method = RequestMethod.POST, value = "/books")
    public void create(@RequestBody Book book) {
    }

/*    @RequestMapping(method = RequestMethod.DELETE, value = "/books/{id}")
    public void delete(@PathVariable("id") String id) {
        bookService.deleteBook(id);
    }*/
}
