package com.chosensolutions.trademebooks.controllers;

import com.chosensolutions.trademebooks.models.Book;
import com.chosensolutions.trademebooks.services.book.BookService;
import com.chosensolutions.trademebooks.utils.DataWrapperDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

//@CrossOrigin(origins = "http://localhost:3100", maxAge = 3600)
@RequestMapping("/api")
@RestController
public class BookController {

    private BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @RequestMapping("/books")
    public List<Book> getAllBooks(@RequestParam("title") String title) {
        List<Book> books = bookService.getAllBooks(title);

        return books;
    }

    @RequestMapping("/auth/books")
    public ResponseEntity<DataWrapperDTO> getAllAuthBooks() {
        List<Book> authBooks = new ArrayList<>();

        return ResponseEntity.status(200).body(new DataWrapperDTO(authBooks, "Here is a list of the currently authenticated user's books", null));
    }

    @RequestMapping(method = RequestMethod.GET, value = "/books/{id}")
    public ResponseEntity<DataWrapperDTO> showBookById(@PathVariable("id") String id) {
        //return bookService.getBookById(id);

        return null;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/books")
    public ResponseEntity<DataWrapperDTO> createNewBook(@RequestBody Book book) {
        //bookService.createNewBook(book);

        return null;
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/books/{id}")
    public ResponseEntity<DataWrapperDTO> updateBookById(@PathVariable("id") String id, @RequestBody Book book) {
        //bookService.updateBookById(book);

        return null;
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/books/{id}")
    public ResponseEntity<DataWrapperDTO> deleteBookById(@PathVariable("id") String id) {
        //bookService.deleteBookById(id);

        return null;
    }

}