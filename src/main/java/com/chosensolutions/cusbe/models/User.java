package com.chosensolutions.cusbe.models;

import javax.persistence.*;
import java.util.Calendar;
import javax.validation.constraints.*;

import com.chosensolutions.cusbe.validation.PasswordMatches;
import lombok.*;

@Getter
@Setter
@Entity
@PasswordMatches
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Email
    @NotEmpty(message = "Email is required.")
    private String email;

    @NotEmpty(message = "Password is required.")
    private String password;

    @Transient
    @NotEmpty(message = "Password confirmation is required.")
    private String passwordConfirmation;

    private Calendar created = Calendar.getInstance();

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL,
            fetch = FetchType.LAZY)
    private Profile profile;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL,
            fetch = FetchType.LAZY)
    private BookStore bookStore;

}
