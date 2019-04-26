package com.chosensolutions.cusbe.repositories;

import com.chosensolutions.cusbe.models.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
    // getall
    // getOne
    // create
    // update
    // delete
}
