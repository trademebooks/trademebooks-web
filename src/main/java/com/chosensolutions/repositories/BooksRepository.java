package com.chosensolutions.repositories;

import com.chosensolutions.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BooksRepository extends JpaRepository<Book, String> {
    // getall
    // getOne
    // create
    // update
    // delete
}
