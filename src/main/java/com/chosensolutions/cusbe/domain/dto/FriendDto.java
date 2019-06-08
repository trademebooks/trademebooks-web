package com.chosensolutions.cusbe.domain.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class FriendDto {

    private long userId;
    private String email;
    private String firstName;
    private String lastName;

}
