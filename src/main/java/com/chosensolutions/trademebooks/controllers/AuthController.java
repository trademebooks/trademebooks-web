package com.chosensolutions.trademebooks.controllers;

import com.chosensolutions.trademebooks.domain.request.RegisterUserRequestDTO;
import com.chosensolutions.trademebooks.domain.request.RequestUserLoginDTO;
import com.chosensolutions.trademebooks.models.User;
import com.chosensolutions.trademebooks.services.UserAuthenticationService;
import com.chosensolutions.trademebooks.services.user.UserService;
import com.chosensolutions.trademebooks.utils.DataWrapperDTO;
import com.chosensolutions.trademebooks.utils.ValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.naming.Binding;
import javax.validation.Valid;
import java.util.Collections;
import java.util.List;

@RequestMapping("/api/web/v1/auth")
@RestController
public class AuthController {

    @Autowired
    private ValidationErrorService validationErrorService;

    @Autowired
    private UserAuthenticationService userAuthenticationService;

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<DataWrapperDTO> register(@Valid @RequestBody RegisterUserRequestDTO registerUserRequestDTO, BindingResult bindingResult) throws Exception {
        // 1. Validation
        List<String> errors = validationErrorService.getAllErrorsFromBindingResult(bindingResult);
        if (errors != null) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new DataWrapperDTO(null, "Check fields", errors));
        }

        // 2. Business Logic
        User newUser = userAuthenticationService.registerUser(registerUserRequestDTO);

        // 3. Success Response
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(new DataWrapperDTO(newUser, "User " + newUser.getEmail() + " successfully registered.", null));
    }

    @RequestMapping("/login")
    public ResponseEntity<DataWrapperDTO> login(@Valid @RequestBody RequestUserLoginDTO requestUserLoginDTO, BindingResult bindingResult) {
        /*
        String email = loginDTO.getEmail();
        String password = loginDTO.getPassword();
        */


        return null;
    }

}