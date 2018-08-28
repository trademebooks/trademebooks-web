package com.chosensolutions.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Getter
@Setter
@Entity
@Table(name = "books")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "book_store_id")
    private BookStore bookStore;

    @Column(name = "title")
    private String title;

    @Column
    private String datePublished;

    @Column
    private String isbnNumber;

    @Column
    private String publisher;

    public Book() {

    }

    public Book(Long id, String title) {
        this.id = id;
        this.title = title;
    }
}