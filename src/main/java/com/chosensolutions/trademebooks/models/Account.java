package com.chosensolutions.trademebooks.models;

import lombok.*;
import javax.persistence.*;

@Data
@Entity
@Table(name = "accounts")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column
    private String phoneNumber;

    @Column
    private boolean receiveEmail;

    public Account(String phoneNumber, boolean receiveEmail) {
        this.phoneNumber = phoneNumber;
        this.receiveEmail = receiveEmail;
    }

}
