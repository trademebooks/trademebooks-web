package com.chosensolutions.trademebooks.controllers.pages;

import com.chosensolutions.trademebooks.models.Book;
import com.chosensolutions.trademebooks.models.BookStore;
import com.chosensolutions.trademebooks.repositories.BookStoresRepository;
import com.chosensolutions.trademebooks.repositories.BookRepository;
import com.chosensolutions.trademebooks.services.book.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

@Controller
public class BookController {

    @Autowired
    BookRepository bookRepository;

    @Autowired
    BookStoresRepository bookStoresRepository;

    @Autowired
    BookService bookService;

    @RequestMapping("/my-books")
    public String myBooks(Model model) {
        System.out.println("all auth books");
        List<Book> theBooks = new LinkedList<>();

        model.addAttribute("books", theBooks);

        return "book-stores/book-stores.index";
    }
    @RequestMapping("/books")
    public String index() {
        return "books/books.index";
    }

    @RequestMapping("/books/1")
    public String show() {
        return "books/books.show";
    }

    @RequestMapping("/books/create")
    public String create() {
        return "books/books.create";
    }

    @RequestMapping("/books/edit")
    public String edit() {
//        List<Book> books = booksRepository.findAll();
//        System.out.println(books);
//        List<BookStore> bookStores = bookStoresRepository.findAll();
//        System.out.println(bookStores);

        System.out.println("break");
        long long1 = 1;
        Optional<BookStore> bookStore1 = bookStoresRepository.findById(long1);

        if (bookStore1.isPresent()) {
            System.out.println(bookStore1.get());
        }

        return "books/books.edit";
    }
}
