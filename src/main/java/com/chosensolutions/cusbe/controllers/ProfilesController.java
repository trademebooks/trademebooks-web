package com.chosensolutions.cusbe.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ProfilesController {

    @RequestMapping("/my-profile")
    public String profilePage() {
        return "profile/profile.show";
    }

    @RequestMapping("/profile/edit")
    public String profileOwnPage() {
        return "profile/profile.edit";
    }

}