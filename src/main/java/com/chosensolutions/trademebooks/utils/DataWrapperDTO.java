package com.chosensolutions.trademebooks.utils;

import java.util.List;

public class DataWrapperDTO {

    private Object data;
    private String message;
    private List<String> errors;

    public DataWrapperDTO(Object data, String message, List<String> errors) {
        this.data = data;
        this.message = message;
        this.errors = errors;
    }

    public Object getData() {
        return data;
    }

    public String getMessage() {
        return message;
    }

    public List<String> getErrors() {
        return errors;
    }

}