package com.chosensolutions.trademebooks.utils;

import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.ArrayList;
import java.util.List;

@Service
public class ValidationErrorService {

    public List<String> getAllErrorsFromBindingResult(BindingResult result) {
        List<String> errors = new ArrayList<>();

        if (result.hasErrors()) {
            for (FieldError error : result.getFieldErrors()) {
                errors.add(error.getField() + " " + error.getDefaultMessage());
            }

            return errors;
        }

        return null;
    }

}
