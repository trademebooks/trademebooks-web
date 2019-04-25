package com.chosensolutions.cusbe.repositories;

import com.chosensolutions.cusbe.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BooksRepository extends JpaRepository<Book, Long> {
    // getall
    // getOne
    // create
    // update
    // delete
}
