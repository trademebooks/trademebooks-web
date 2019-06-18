package com.chosensolutions.trademebooks.models;

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

    @Column(name = "date_published")
    private String datePublished;

    @Column(name = "isbn_number")
    private String isbnNumber;

    @Column(name = "publisher")
    private String publisher;

    @Column(name = "edition")
    private String edition;

    public Book() {
    }

    public Book(Long id, String title) {
        this.id = id;
        this.title = title;
    }
}