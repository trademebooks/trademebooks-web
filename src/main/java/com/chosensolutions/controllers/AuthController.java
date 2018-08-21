package com.chosensolutions.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AuthController {

    @RequestMapping("/login")
    public String list() {
        return "auth/login";
    }

/*

    @Autowired
    private IUserService userService;

    //

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
*/

}