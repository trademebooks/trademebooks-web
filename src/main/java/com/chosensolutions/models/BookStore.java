package com.chosensolutions.models;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "book_stores")
public class BookStore {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

/*    @OneToMany(mappedBy = "bookStore", cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    private List<Book> books;*/

    public BookStore() {

    }

    public BookStore(String name) {
        this.name = name;
    }

    public BookStore(String name, String description) {
        this.name = name;
        this.description = description;
    }

}
