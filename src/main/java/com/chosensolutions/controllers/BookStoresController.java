package com.chosensolutions.controllers;

import com.chosensolutions.models.BookStore;
import com.chosensolutions.services.BookStoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class BookStoresController {

    @Autowired
    BookStoreService bookStoreService;

    @RequestMapping("/book-stores")
    public String index(Model model) {
        model.addAttribute("bookStores", bookStoreService.getAll());

        return "book-stores/book-stores.index";
    }

    @RequestMapping("/book-stores/1")
    public String show(/*@RequestParam int id, */Model model) {
        BookStore bookStore = bookStoreService.getById();
        model.addAttribute(bookStore);

        return "book-stores/book-stores.show";
    }
}