package com.chosensolutions.trademebooks.services.auth;

import com.chosensolutions.trademebooks.config.security.JwtTokenProvider;
import com.chosensolutions.trademebooks.dtos.request.LoginUserRequestDTO;
import com.chosensolutions.trademebooks.dtos.request.RegisterUserRequestDTO;
import com.chosensolutions.trademebooks.dtos.response.LoginUserResponseDTO;
import com.chosensolutions.trademebooks.exceptions.auth.UserEmailAlreadyExistsException;
import com.chosensolutions.trademebooks.exceptions.auth.UserLoginInvalidCredentialsException;
import com.chosensolutions.trademebooks.models.User;
import com.chosensolutions.trademebooks.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import static com.chosensolutions.trademebooks.config.security.SecurityConstants.TOKEN_PREFIX;

@Service
public class UserAuthenticationService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User register(RegisterUserRequestDTO registerUserRequestDTO) {
        try {
            User user = new User();
            user.setEmail(registerUserRequestDTO.getEmail());
            user.setPassword(bCryptPasswordEncoder.encode(registerUserRequestDTO.getPassword()));

            return userRepository.save(user);
        }
        catch (DataIntegrityViolationException exception) {
            System.out.println(exception.toString());
            throw new UserEmailAlreadyExistsException("The email: '" + registerUserRequestDTO.getEmail() + "' already exists. Please try another one.");
        }
    }

    public LoginUserResponseDTO login(LoginUserRequestDTO loginUserRequestDTO) {
        try {
            String email = loginUserRequestDTO.getEmail();
            String password = loginUserRequestDTO.getPassword();
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt = TOKEN_PREFIX + tokenProvider.generateToken(authentication);

            return new LoginUserResponseDTO(jwt);
        }
        catch (BadCredentialsException exception) {
            // 403 response
            throw new UserLoginInvalidCredentialsException("The credentials that you have entered are incorrect. Please try again.");
        }
    }

    public User getCurrentAuthUser() {
        return (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

}
