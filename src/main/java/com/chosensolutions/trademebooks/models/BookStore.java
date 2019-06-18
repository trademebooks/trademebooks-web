package com.chosensolutions.trademebooks.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Getter
@Setter
@Entity
@Table(name = "book_stores")
public class BookStore {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @JsonIgnore
    @OneToMany(
            mappedBy = "bookStore",
            cascade = CascadeType.ALL,
            fetch = FetchType.LAZY)
    private List<Book> books;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

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
