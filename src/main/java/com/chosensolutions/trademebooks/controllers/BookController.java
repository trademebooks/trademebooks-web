package com.chosensolutions.trademebooks.controllers;

import com.chosensolutions.trademebooks.models.Book;
import com.chosensolutions.trademebooks.services.book.BookService;
import com.chosensolutions.trademebooks.dtos.DataWrapperDTO;
import com.chosensolutions.trademebooks.utils.ValidationErrorService;
import org.hibernate.annotations.Type;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.*;

@RequestMapping("/api/web/v1/books")
@RestController
public class BookController {

    @Autowired
    private BookService bookService;

    @Autowired
    private ValidationErrorService validationErrorService;

    /**
     * GET /books?title=whateveryoursearchtermis
     *
     * @param title
     * @return
     */
    @RequestMapping("")
    public ResponseEntity<DataWrapperDTO> getAllBooks(@RequestParam(name = "title", defaultValue = "") String title) {
        List<Book> books = bookService.getAllBooks(title);
        return ResponseEntity
                .status(200)
                .body(new DataWrapperDTO("Here is a list of all the books in the database", books, null));
    }

    // TODO
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
    public ResponseEntity<DataWrapperDTO> showBookById(@PathVariable("id") @Positive Long id) {
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
        Book createdBook = bookService.createBook(book);

        return ResponseEntity
                .status(200)
                .body(new DataWrapperDTO("Creating the new book was successful!", createdBook, null));
    }

    /**
     * Update a book by id
     *
     * @param id
     * @param book
     * @return
     */
    @RequestMapping(method = RequestMethod.PUT, value = "/{id}")
    public ResponseEntity<DataWrapperDTO> updateBookById(@PathVariable("id") Long id, @RequestBody Book book, BindingResult bindingResult) {
        List<String> errors = validationErrorService.getAllErrorsFromBindingResult(bindingResult);
        if (errors != null) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new DataWrapperDTO(null, "Check fields", errors));
        }

        Book updateBook = bookService.updateBook(book);

        return ResponseEntity
                .status(200)
                .body(new DataWrapperDTO("Updating the existing book was successful!", updateBook, null));
    }

    /**
     * Delete a book by id
     *
     * @param id
     * @return
     */
    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public ResponseEntity<DataWrapperDTO> deleteBookById(@PathVariable("id") Long id) {
        bookService.deleteBook(id);

        return ResponseEntity
                .status(200)
                .body(new DataWrapperDTO("Deleted the book with the id of: " + id.toString(), null, null));
    }

}