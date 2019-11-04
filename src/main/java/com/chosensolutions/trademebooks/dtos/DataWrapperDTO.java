package com.chosensolutions.trademebooks.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class DataWrapperDTO {

    private String message;
    private Object data;
    private List<?> errors;

}