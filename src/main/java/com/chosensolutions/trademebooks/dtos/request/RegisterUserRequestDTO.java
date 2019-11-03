package com.chosensolutions.trademebooks.dtos.request;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
public class RegisterUserRequestDTO {

    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String password;

}
