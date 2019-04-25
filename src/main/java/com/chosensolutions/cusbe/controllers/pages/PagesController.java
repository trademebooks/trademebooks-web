package com.chosensolutions.controllers.pages;

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

    @RequestMapping("/terms")
    public String terms() {
        return "pages/terms";
    }

    @RequestMapping("/landing")
    public String landingPage() {
        return "pages/landing";
    }

}
