package com.chosensolutions.trademebooks.models;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import java.util.Calendar;
import java.util.Collection;
import java.util.List;

import com.chosensolutions.trademebooks.validation.PasswordMatches;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Data
@Entity(name = "users")
@PasswordMatches
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    ////////////////////////////////////////////////////////////////////////////////
    // User Fields
    ////////////////////////////////////////////////////////////////////////////////
    private String firstName;

    private String lastName;

    @Email
    @NotEmpty(message = "Email is required.")
    @Column(nullable = false, length = 100, unique = true)
    private String email;

    @NotEmpty(message = "Password is required.")
    private String password;

    private Calendar created = Calendar.getInstance();

    ////////////////////////////////////////////////////////////////////////////////
    // Relationships
    ////////////////////////////////////////////////////////////////////////////////
    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Profile profile;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL,
            fetch = FetchType.LAZY)
    private BookStore bookStore;

    @OneToMany(mappedBy = "userDetails", cascade = CascadeType.ALL)
    private List<AddressEntity> addresses;

    ////////////////////////////////////////////////////////////////////////////////
    // UserDetails interface methods
    ////////////////////////////////////////////////////////////////////////////////
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getUsername() {
        return this.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
