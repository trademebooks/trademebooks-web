package com.chosensolutions.repositories;

import com.chosensolutions.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BooksRepository extends CrudRepository<Book, String> {
    // getall
    // getOne
    // create
    // update
    // delete
}
