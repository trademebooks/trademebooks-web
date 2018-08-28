package com.chosensolutions.services;

import javax.transaction.Transactional;

import com.chosensolutions.models.User;
import com.chosensolutions.repositories.UserRepository;
import com.chosensolutions.validation.EmailExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
@Transactional
class UserService implements IUserService {

    @Autowired
    private UserRepository repository;

    @Override
    public User registerNewUser(final User user) throws EmailExistsException {
        if (emailExist(user.getEmail())) {
            throw new EmailExistsException("There is an account with that email address: " + user.getEmail());
        }
        return repository.save(user);
    }

    private boolean emailExist(String email) {
        final User user = repository.findByEmail(email);
        return user != null;
    }

    /**
     * Very Important function that returns the currently authenticated User object
     *
     * @return User
     */
    public User getCurrentAuthUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String email = auth.getName();
        User user = repository.findByEmail(email);

        return user;
    }
}
