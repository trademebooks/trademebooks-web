package com.chosensolutions.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BooksController {

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
        return "books/books.edit";
    }
}
