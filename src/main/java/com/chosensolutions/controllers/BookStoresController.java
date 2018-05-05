package com.chosensolutions.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BookStoresController {

    @RequestMapping("/book-stores")
    public String index() {
        return "book-stores/book-stores.index";
    }
}
