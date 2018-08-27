package com.chosensolutions.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ProfilesController {

    @RequestMapping("/profiles/123")
    public String profilePage() {
        return "profile/profile.show";
    }

    @RequestMapping("/profile/edit")
    public String profileOwnPage() {
        return "profile/profile.edit";
    }

}