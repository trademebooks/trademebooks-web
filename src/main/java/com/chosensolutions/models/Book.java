package com.chosensolutions.models;

import javax.persistence.*;

// REFREENCE for search
// https://developers.google.com/apis-explorer/#p/books/v1/books.volumes.list?q=harry+potter&_h=1&
@Entity
@Table(name = "books")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private String id;

    @Column(name = "title")
    private String title;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name = "book_store_id")
    private BookStore bookStore;

    public Book() {

    }

    public Book(String id, String title) {
        this.id = id;
        this.title = title;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public BookStore getBookStore() {
        return bookStore;
    }

    public void setBookStore(BookStore bookStore) {
        this.bookStore = bookStore;
    }
}