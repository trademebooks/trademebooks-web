package com.chosensolutions.trademebooks.repositories;

import com.chosensolutions.trademebooks.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    // getall
    // getOne
    // create
    // update
    // delete

    List<Book> findByTitleContaining(String title);

}
