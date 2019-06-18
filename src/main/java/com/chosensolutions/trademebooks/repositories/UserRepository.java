package com.chosensolutions.trademebooks.repositories;

import com.chosensolutions.trademebooks.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);

    User findByUserId(String userId);

}
