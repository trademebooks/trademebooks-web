package com.chosensolutions.models;

import javax.persistence.*;
import java.util.Calendar;
import javax.validation.constraints.*;

import com.chosensolutions.validation.PasswordMatches;
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

    @OneToOne(cascade = CascadeType.ALL)
    private Profile profile;

}
