package com.chosensolutions.cusbe.controllers.pages.auth;

import com.chosensolutions.cusbe.models.User;
import com.chosensolutions.cusbe.validation.EmailExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;

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