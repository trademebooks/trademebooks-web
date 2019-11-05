package com.chosensolutions.trademebooks.controllers;

import com.chosensolutions.trademebooks.models.Book;
import com.chosensolutions.trademebooks.services.book.BookService;
import com.chosensolutions.trademebooks.dtos.DataWrapperDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RequestMapping("/api/web/v1/books")
@RestController
public class BookController {

    @Autowired
    private BookService bookService;

    /**
     * GET /books?title=whateveryoursearchtermis
     *
     * @param title
     * @return
     */
    @RequestMapping("")
    public List<Book> getAllBooks(@RequestParam(name = "title", defaultValue = "") String title) {
        List<Book> books = bookService.getAllBooks(title);

        return books;
    }

    /**
     * Get all the books for the currently authenticated user
     *
     * @return
     */
    @RequestMapping("/books/auth")
    public ResponseEntity<DataWrapperDTO> getAllAuthBooks() {
        List<Book> authBooks = new ArrayList<>();

        return ResponseEntity
                .status(200)
                .body(new DataWrapperDTO("Here is a list of the currently authenticated user's books", authBooks, null));
    }

    /**
     * Get a single book by its id
     *
     * @param id
     * @return
     */
    @RequestMapping(method = RequestMethod.GET, value = "{id}")
    public ResponseEntity<DataWrapperDTO> showBookById(@PathVariable("id") Long id) {
        Book book = bookService.getBookById(id);

        return ResponseEntity
                .status(200)
                .body(new DataWrapperDTO("This is the specified book with the id of: " + id.toString(), book, null));
    }

    /**
     * Create a new book
     *
     * @param book
     * @return
     */
    @RequestMapping(method = RequestMethod.POST, value = "")
    public ResponseEntity<DataWrapperDTO> createNewBook(@RequestBody Book book) {
        return ResponseEntity
                .status(200)
                .body(new DataWrapperDTO("Placer holder", null, null));
    }

    /**
     * Update a book by id
     *
     * @param id
     * @param book
     * @return
     */
    @RequestMapping(method = RequestMethod.PUT, value = "/{id}")
    public ResponseEntity<DataWrapperDTO> updateBookById(@PathVariable("id") Long id, @RequestBody Book book) {
        return ResponseEntity
                .status(200)
                .body(new DataWrapperDTO("Placer holder", null, null));
    }

    /**
     * Delete a book by id
     *
     * @param id
     * @return
     */
    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public ResponseEntity<DataWrapperDTO> deleteBookById(@PathVariable("id") Long id) {
        return ResponseEntity
                .status(200)
                .body(new DataWrapperDTO("Placer holder", null, null));
    }

}