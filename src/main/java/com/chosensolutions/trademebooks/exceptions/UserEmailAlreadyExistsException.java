package com.chosensolutions.trademebooks.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class UserEmailAlreadyExistsException extends RuntimeException {

    public UserEmailAlreadyExistsException(String message) {
        super(message);
    }

}