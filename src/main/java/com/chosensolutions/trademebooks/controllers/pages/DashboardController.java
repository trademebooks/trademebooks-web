package com.chosensolutions.trademebooks.controllers.pages;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DashboardController {

    @RequestMapping("/dashboard")
    public String authDashboardPage() {
        return "dashboard/dashboard";
    }

}