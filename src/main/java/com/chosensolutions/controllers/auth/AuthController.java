package com.chosensolutions.controllers.auth;

import com.chosensolutions.models.User;
import com.chosensolutions.services.IUserService;
import com.chosensolutions.validation.EmailExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;

@Controller
public class AuthController {

    @Autowired
    private IUserService userService;

    @RequestMapping("/login")
    public String list() {
        return "auth/login";
    }

    @RequestMapping(value = "signup")
    public ModelAndView registrationForm() {
        return new ModelAndView("auth/register", "user", new User());
    }

    @RequestMapping(value = "user/register")
    public ModelAndView registerUser(@Valid final User user, final BindingResult result) {
        if (result.hasErrors()) {
            return new ModelAndView("auth/register", "user", user);
        }
        try {
            userService.registerNewUser(user);
        } catch (EmailExistsException e) {
            result.addError(new FieldError("user", "email", e.getMessage()));
            return new ModelAndView("auth/register", "user", user);
        }
        return new ModelAndView("redirect:/login");
    }

}