package com.chosensolutions.models;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "books")
public class Book implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

/*    @ManyToOne
    private BookStore bookStore;*/

    @Column(name = "title")
    private String title;

    @Column
    private String datePublished;

    @Column
    private String isbnNumber;

    @Column
    private String publisher;

}