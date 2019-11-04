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

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column
    private String phoneNumber;

    @Column
    private boolean receiveEmail;

    public Account(User user, String phoneNumber, boolean receiveEmail) {
        this.user = user;
        this.phoneNumber = phoneNumber;
        this.receiveEmail = receiveEmail;
    }
}
