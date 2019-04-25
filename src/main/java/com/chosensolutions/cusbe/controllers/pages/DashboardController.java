package com.chosensolutions.controllers.pages;

import com.chosensolutions.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DashboardController {

    @Autowired
    IUserService userService;

    @RequestMapping("/dashboard")
    public String authDashboardPage() {

        System.out.println("Auth User");
        System.out.println(userService.getCurrentAuthUser().getProfile().getFirstName());
        System.out.println(userService.getCurrentAuthUser().getBookStore().getDescription());
        System.out.println("Auth User books");
        System.out.println(userService.getCurrentAuthUser().getBookStore().getBooks());

        return "dashboard/dashboard";
    }

}