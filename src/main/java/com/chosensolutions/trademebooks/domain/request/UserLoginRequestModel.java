package com.chosensolutions.trademebooks.domain.request;

import lombok.Data;

@Data
public class UserLoginRequestModel {

    private String email;

    private String password;

}
