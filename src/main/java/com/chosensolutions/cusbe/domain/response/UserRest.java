package com.chosensolutions.cusbe.domain.response;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class UserRest {

    private String userId;
    private String firstName;
    private String lastName;
    private String email;

}
