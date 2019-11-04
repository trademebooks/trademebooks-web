package com.chosensolutions.trademebooks.exceptions;

import com.chosensolutions.trademebooks.exceptions.auth.UserEmailAlreadyExistsException;
import com.chosensolutions.trademebooks.exceptions.auth.UserLoginInvalidCredentialsException;
import com.chosensolutions.trademebooks.dtos.DataWrapperDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.Collections;

@ControllerAdvice
@RestController
public class CustomResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler
    public final ResponseEntity<DataWrapperDTO> handleUserEmailAlreadyExists(UserEmailAlreadyExistsException exception, WebRequest request) {
        return ResponseEntity
                .status(HttpStatus.CONFLICT)
                .body(new DataWrapperDTO(exception.getMessage(), null, Collections.singletonList(exception.getMessage())));
    }

    @ExceptionHandler
    public final ResponseEntity<DataWrapperDTO> handleUserLoginInvalidCredentials(UserLoginInvalidCredentialsException exception, WebRequest request) {
        return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body(new DataWrapperDTO(exception.getMessage(), null, Collections.singletonList(exception.getMessage())));
    }

}
