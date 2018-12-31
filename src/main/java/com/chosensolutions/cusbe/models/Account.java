package com.chosensolutions.cusbe.models;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
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

}
