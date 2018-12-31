package com.chosensolutions.cusbe.controllers;

import com.chosensolutions.cusbe.models.Book;
import com.chosensolutions.cusbe.services.BookService;
import com.chosensolutions.cusbe.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RequestMapping("/api/v1/")
@RestController
public class BookAPIController {

    @Autowired
    private BookService bookService;

    @Autowired
    private IUserService userService;

    @RequestMapping("/books")
    public List<Book> index() {
        System.out.println("test123");
        return bookService.getAllBooks();
    }

    @RequestMapping("/auth/books")
    public List<Book> getAllAuthBooks() {
        System.out.println("all auth books");
        List<Book> theBooks = new LinkedList<>();
        for (Book book: bookService.getAllAuthBooks()) {
            System.out.println(book);
            theBooks.add(book);
        }

        return theBooks;
    }

/*    @RequestMapping(method = RequestMethod.GET, value = "/books/{id}")
    public Book show(@PathVariable("id") String id) {
        return bookService.getBookById(id);
    }*/

    @RequestMapping(method = RequestMethod.POST, value = "/books")
    public void create(@RequestBody Book book) {
        System.out.println(book);

        //userService.getCurrentAuthUser().getBookStore().getId();

        System.out.println(userService.getCurrentAuthUser().getBookStore().getId());

        System.out.println(book);

        //bookService.createBook(book);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/books/{id}")
    public void update(@PathVariable("id") String id, @RequestBody Book book) {
        bookService.updateBook(id, book);
    }

/*    @RequestMapping(method = RequestMethod.DELETE, value = "/books/{id}")
    public void delete(@PathVariable("id") String id) {
        bookService.deleteBook(id);
    }*/
}
