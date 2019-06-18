package com.chosensolutions.trademebooks.controllers.pages.auth;

import com.chosensolutions.trademebooks.models.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class AuthController {

    @RequestMapping("/login")
    public String login() {
        return "auth/login";
    }

    @RequestMapping("/login2")
    public String login2() {
        return "auth/login2";
    }

    @RequestMapping(value = "signup")
    public ModelAndView registrationForm() {
        return new ModelAndView("auth/register", "user", new User());
    }


}