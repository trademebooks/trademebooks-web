package com.chosensolutions.repositories;

import com.chosensolutions.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface UserRepository {}
/*
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    //User findByEmail(String email);

}*/
