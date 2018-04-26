package com.chosensolutions.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @RequestMapping("/")
    public String home() {
        return "Hello world 123";
    }

    @RequestMapping("/test")
    public String test() {
        return "Test Charles is cool";
    }
}
