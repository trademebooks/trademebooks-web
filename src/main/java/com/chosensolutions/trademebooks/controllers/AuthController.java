package com.chosensolutions.trademebooks.controllers;

import com.chosensolutions.trademebooks.models.User;
import com.chosensolutions.trademebooks.utils.DataWrapperDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;

@RequestMapping("/api")
@RestController
public class AuthController {

    @RequestMapping("/register")
    public ResponseEntity<DataWrapperDTO> register(@RequestBody User user) {
        try {
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(new DataWrapperDTO(user, "User " + user.getEmail() + " successfully registered.", null));
        }
        catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body(new DataWrapperDTO(null, "Failed to register new user.", Collections.singletonList("Username already exists.")));
        }
    }

    @RequestMapping("/login")
    public ResponseEntity<DataWrapperDTO> login(/* RequestLoginDTO requestLoginDTO*/) {
        /*
        String email = loginDTO.getEmail();
        String password = loginDTO.getPassword();
        */



        return null;
    }

}