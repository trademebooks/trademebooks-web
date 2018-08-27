package com.chosensolutions.models;

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

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @OneToMany(
            mappedBy = "bookStore",
            cascade = CascadeType.ALL,
            fetch = FetchType.LAZY)
    private List<Book> books;

    public BookStore() {

    }

    public BookStore(String name) {
        this.name = name;
    }

    public BookStore(String name, String description) {
        this.name = name;
        this.description = description;
    }

    @Override
    public String toString() {
        return "BookStore{" +
                "id=" + id +
                ", userId=" + userId +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", books=" + books +
                '}';
    }
}
