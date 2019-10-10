package com.chosensolutions.trademebooks.repositories;

import com.chosensolutions.trademebooks.models.BookStore;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookStoresRepository extends JpaRepository<BookStore, Long> {

}
