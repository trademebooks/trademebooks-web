package com.chosensolutions.trademebooks.domain.response;

import lombok.Data;

import java.util.List;

@Data
public class UserRest {

    private String userId;
    private String firstName;
    private String lastName;
    private String email;

    private List<AddressesRest> addresses;

}
