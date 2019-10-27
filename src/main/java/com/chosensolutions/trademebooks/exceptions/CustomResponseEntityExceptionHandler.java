package com.chosensolutions.trademebooks.exceptions;


import com.chosensolutions.trademebooks.utils.DataWrapperDTO;
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

/*    @ExceptionHandler
    public final ResponseEntity<Object> handleProjectIdException(ProjectIdException ex, WebRequest request){
        ProjectIdExceptionResponse exceptionResponse = new ProjectIdExceptionResponse(ex.getMessage());
        return new ResponseEntity(exceptionResponse, HttpStatus.BAD_REQUEST);
    }*/
/*

    @ExceptionHandler
    public final ResponseEntity<Object> handleProjectNotFoundException(ProjectNotFoundException ex, WebRequest request){
        ProjectNotFoundExceptionResponse exceptionResponse = new ProjectNotFoundExceptionResponse(ex.getMessage());
        return new ResponseEntity(exceptionResponse, HttpStatus.BAD_REQUEST);
    }
*/

    @ExceptionHandler
    public final ResponseEntity<DataWrapperDTO> handleUserEmailAlreadyExists(UserEmailAlreadyExistsException exception, WebRequest request) {
/*
        DataWrapperDTO dataWrapperDTO = new DataWrapperDTO(null, exception.getMessage(), Collections.singletonList(exception.getMessage()));
        ResponseEntity<DataWrapperDTO> response = new ResponseEntity<>(dataWrapperDTO, HttpStatus.CONFLICT);
        //return response;
*/
        return ResponseEntity
                .status(HttpStatus.CONFLICT)
                .body(new DataWrapperDTO(null, exception.getMessage(), Collections.singletonList(exception.getMessage())));

    }

}
