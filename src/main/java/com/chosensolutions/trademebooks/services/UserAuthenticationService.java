package com.chosensolutions.trademebooks.services;

import com.chosensolutions.trademebooks.domain.request.RegisterUserRequestDTO;
import com.chosensolutions.trademebooks.exceptions.UserEmailAlreadyExistsException;
import com.chosensolutions.trademebooks.models.User;
import com.chosensolutions.trademebooks.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserAuthenticationService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User registerUser(RegisterUserRequestDTO registerUserRequestDTO) {
        try {
            User user = new User();
            user.setEmail(registerUserRequestDTO.getEmail());
            user.setPassword(bCryptPasswordEncoder.encode(registerUserRequestDTO.getPassword()));

            return userRepository.save(user);
        }/*
        catch (Exception exception) {
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT, "Foo Not Found", exception);
        }*/
        catch (Exception e) {
            throw new UserEmailAlreadyExistsException("The email: '" + registerUserRequestDTO.getEmail() + "' already exists. Please try another one.");
        }
    }

    public User getCurrentAuthUser() {
        return (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

}
