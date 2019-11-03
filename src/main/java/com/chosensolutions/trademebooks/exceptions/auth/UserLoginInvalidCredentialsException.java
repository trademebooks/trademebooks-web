package com.chosensolutions.trademebooks.exceptions.auth;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.FORBIDDEN)
public class UserLoginInvalidCredentialsException extends RuntimeException {

    public UserLoginInvalidCredentialsException(String message) {
        super(message);
    }

}
