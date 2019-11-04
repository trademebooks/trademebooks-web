package com.chosensolutions.trademebooks.services.auth;

import com.chosensolutions.trademebooks.models.User;
import com.chosensolutions.trademebooks.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("userServiceImpl")
public class UserServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);

        if (user == null) {
            throw new UsernameNotFoundException(email);
        }

        return user;
    }

    @Transactional
    public User loadUserById(Long id) {
        User user = userRepository.getUserById(id);

        if (user == null) throw new UsernameNotFoundException("User not found");

        return user;
    }
}
