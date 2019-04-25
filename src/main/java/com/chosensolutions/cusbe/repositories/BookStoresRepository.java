package com.chosensolutions.cusbe.repositories;

import com.chosensolutions.cusbe.models.BookStore;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookStoresRepository extends JpaRepository<BookStore, Long> {
    // getall
    // getOne
    // create
    // update
    // delete
}
