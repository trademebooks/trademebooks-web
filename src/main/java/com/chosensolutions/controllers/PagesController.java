package com.chosensolutions.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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

    // Login form
    @RequestMapping("/login.html")
    public String login() {
        return "login.html";
    }

    // Login form with error
    @RequestMapping("/login-error.html")
    public String loginError(Model model) {
        model.addAttribute("loginError", true);
        return "login.html";
    }
}
