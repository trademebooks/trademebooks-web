package com.chosensolutions.trademebooks.controllers;

import com.chosensolutions.trademebooks.dtos.request.RegisterUserRequestDTO;
import com.chosensolutions.trademebooks.dtos.request.LoginUserRequestDTO;
import com.chosensolutions.trademebooks.dtos.response.LoginUserResponseDTO;
import com.chosensolutions.trademebooks.models.User;
import com.chosensolutions.trademebooks.services.auth.UserAuthenticationService;
import com.chosensolutions.trademebooks.dtos.DataWrapperDTO;
import com.chosensolutions.trademebooks.utils.ValidationErrorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("/api/web/v1/auth")
@RestController
public class AuthController {

    @Autowired
    private ValidationErrorService validationErrorService;

    @Autowired
    private UserAuthenticationService userAuthenticationService;

    /**
     * Registers the user in our database
     *
     * @param registerUserRequestDTO
     * @param bindingResult
     * @return
     */
    @PostMapping("/register")
    public ResponseEntity<DataWrapperDTO> register(@Valid @RequestBody RegisterUserRequestDTO registerUserRequestDTO, BindingResult bindingResult) {
        // 1. Validation
        List<String> errors = validationErrorService.getAllErrorsFromBindingResult(bindingResult);
        if (errors != null) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new DataWrapperDTO("Check fields", null, errors));
        }

        // 2. Business Logic
        User registeredUser = userAuthenticationService.register(registerUserRequestDTO);

        // 3. Success Response
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(new DataWrapperDTO("The email " + registeredUser.getEmail() + " has successfully registered.", registeredUser, null));
    }

    /**
     * Authenticates the user in with given credentials
     *
     * @param loginUserRequestDTO
     * @param bindingResult
     * @return
     */
    @PostMapping("/login")
    public ResponseEntity<DataWrapperDTO> login(@Valid @RequestBody LoginUserRequestDTO loginUserRequestDTO, BindingResult bindingResult) {
        // 1. Validation - Constraint/Form
        List<String> errors = validationErrorService.getAllErrorsFromBindingResult(bindingResult);
        if (errors != null) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new DataWrapperDTO(null, "Check fields", errors));
        }

        // 2. Business Logic - Logs the user in
        LoginUserResponseDTO loginUserResponseDTO = userAuthenticationService.login(loginUserRequestDTO);

        // 3. Success response
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(new DataWrapperDTO("The email " + loginUserRequestDTO.getEmail() + " has successfully logged in.", loginUserResponseDTO, null));
    }

    /**
     * Get the currently authenticated user's profile information
     *
     * @return
     */
    @GetMapping("/user")
    public ResponseEntity<DataWrapperDTO> getCurrentAuthUser() {
        Object user = userAuthenticationService.getCurrentAuthUser();

        // 3. Success response
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(new DataWrapperDTO("This is the currently authenticated user", user, null));
    }

}