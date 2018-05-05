package com.chosensolutions.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PagesController {

    @RequestMapping("/")
    public String home() {
        return "pages/home";
    }

    @RequestMapping("/about")
    public String about() {
        return "pages/about";
    }

    @RequestMapping("/contact")
    public String contact() {
        return "pages/contact";
    }

/*    @RequestMapping("/error")
    public String error() {
        return "pages/404";
    }*/
}
