package com.chosensolutions.controllers;

import org.springframework.stereotype.Controller;

@Controller
public class BookController {

    public String books() {
        System.out.println("Hello");
        return "hi";
    }
}
