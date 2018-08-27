package com.chosensolutions.controllers;

import com.chosensolutions.models.User;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.security.Principal;

@Controller
public class ProfilesController {

    @RequestMapping("/my-profile")
    public String profilePage(Principal principal, Authentication authentication) {

        System.out.println(principal.getName());
        System.out.println(authentication);

        //User user = (User) SecurityContextHolder.getContext().getAuthentication().getDetails();

/*        final UserDetails currentUser = (UserDetails) ((Authentication) principal).getPrincipal();

        System.out.println(currentUser.getId());*/

        return "profile/profile.show";
    }

    @RequestMapping("/profile/edit")
    public String profileOwnPage() {
        return "profile/profile.edit";
    }

}