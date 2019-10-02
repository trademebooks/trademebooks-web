package com.chosensolutions.trademebooks.models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Calendar;
import java.util.List;
import javax.validation.constraints.*;

import com.chosensolutions.trademebooks.validation.PasswordMatches;
import lombok.*;

@Data
@Entity(name = "users")
@PasswordMatches
public class User implements Serializable {

    private static final long serialVersionUID = 5313493413859894403L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String userId;

    @Column(nullable = false, length = 50)
    private String firstName;

    @Column(nullable = false, length = 50)
    private String lastName;

    private String encryptedPassword;
    private String emailVerificationToken;

    @Column(nullable = true /*, columnDefinition = "boolean default false"*/)
    private Boolean emailVerificationStatus = false;

    @Email
    @NotEmpty(message = "Email is required.")
    @Column(nullable = false, length = 100, unique = true)
    private String email;

    @NotEmpty(message = "Password is required.")
    private String password;

/*    @Transient
    @NotEmpty(message = "Password confirmation is required.")
    private String passwordConfirmation;*/

    private Calendar created = Calendar.getInstance();

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Profile profile;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL,
            fetch = FetchType.LAZY)
    private BookStore bookStore;

    @OneToMany(mappedBy = "userDetails", cascade = CascadeType.ALL)
    private List<AddressEntity> addresses;

}
