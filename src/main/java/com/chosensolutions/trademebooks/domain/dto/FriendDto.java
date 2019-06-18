package com.chosensolutions.trademebooks.domain.dto;

import lombok.Data;

import java.math.BigInteger;

@Data
public class FriendDto {

    private BigInteger userId;
    private String email;
    private String firstName;
    private String lastName;

}
