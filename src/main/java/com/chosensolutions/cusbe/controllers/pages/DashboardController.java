package com.chosensolutions.cusbe.controllers.pages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DashboardController {

    @RequestMapping("/dashboard")
    public String authDashboardPage() {
        return "dashboard/dashboard";
    }

}