package com.chosensolutions.models;

import lombok.*;

import javax.persistence.*;

@Data
@Entity
@Table(name = "books")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private String id;

    @ManyToOne
    private BookStore bookStore;

    @Column(name = "title")
    private String title;

    public Book() {

    }

    public Book(String id, String title) {
        this.id = id;
        this.title = title;
    }

}