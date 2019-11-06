package com.chosensolutions.trademebooks.models;

import lombok.*;
import javax.persistence.*;
import java.util.*;

@Data
@Entity
@Table(name = "books")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "book_store_id")
    private BookStore bookStore;

    @Column(name = "title")
    private String title;

    @Column(name = "authors")
    private String authors;

    @Column(name = "date_published")
    private String datePublished;

    @Column(name = "isbn_number_10")
    private String isbnNumber10;

    @Column(name = "isbn_number_13")
    private String isbnNumber13;

    @Column(name = "publisher")
    private String publisher;

    @Column(name = "edition")
    private String edition;

    @Column(name = "book_condition")
    private String bookCondition; // the condition can be as follows: poor, fair, good, very_good, and like_new

    @Column(name = "price")
    private double price;

    @Column(name = "description", columnDefinition = "text")
    private String description;

    @Column(name = "school")
    private String school;

    @Column(name = "book_cover_image")
    private String book_cover_image;

    public Book() {
    }

    public Book(BookStore bookStore, String title, String authors, String datePublished, String isbnNumber10, String isbnNumber13, String publisher, String edition, String bookCondition, double price, String description, String school, String book_cover_image) {
        this.bookStore = bookStore;
        this.title = title;
        this.authors = authors;
        this.datePublished = datePublished;
        this.isbnNumber10 = isbnNumber10;
        this.isbnNumber13 = isbnNumber13;
        this.publisher = publisher;
        this.edition = edition;
        this.bookCondition = bookCondition;
        this.price = price;
        this.description = description;
        this.school = school;
        this.book_cover_image = book_cover_image;
    }
}