package com.chosensolutions.repository;

import com.chosensolutions.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.*;

public interface UsersRepository extends JpaRepository<Users, Integer> {
    Optional<Users> findByName(String username);
}
