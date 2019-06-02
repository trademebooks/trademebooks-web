package com.chosensolutions.cusbe.domain.response;

import lombok.Data;

@Data
public class AddressesRest {

    private String city;
    private String country;
    private String streetName;
    private String postalCode;
    private String type;

}
