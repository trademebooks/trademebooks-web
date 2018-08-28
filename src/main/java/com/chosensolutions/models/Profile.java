package com.chosensolutions.models;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "profiles")
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column
    private String username;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

}
