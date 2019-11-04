package com.chosensolutions.trademebooks.models;

import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor
@Entity
@Table(name = "profiles")
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column
    private String username;

    @Column
    private String firstName;

    @Column
    private String lastName;

    public Profile(User user, String username, String firstName, String lastName) {
        this.user = user;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
