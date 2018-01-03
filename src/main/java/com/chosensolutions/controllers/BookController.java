package com.chosensolutions.controllers;

import org.springframework.stereotype.Controller;

@Controller
public class BookController {
    public String hello() {
        System.out.println("Hello");
        return "hi";
    }
}
