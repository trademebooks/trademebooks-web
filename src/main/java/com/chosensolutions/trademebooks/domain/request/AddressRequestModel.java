package com.chosensolutions.trademebooks.domain.request;

import lombok.Data;

@Data
public class AddressRequestModel {

    private String city;
    private String country;
    private String streetName;
    private String postalCode;
    private String type;
}
