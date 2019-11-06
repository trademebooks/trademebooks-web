package com.chosensolutions.trademebooks.bootstrap;

import com.chosensolutions.trademebooks.models.Book;
import com.github.javafaker.Faker;

import java.util.concurrent.TimeUnit;

public class BookFactory {

    public BookFactory() {

    }

    public Book generateBook() {
        Faker faker = new Faker();

        Book book = new Book();

        book.setTitle(faker.book().title());
        book.setAuthors(faker.book().author() + " " + faker.book().author() + " " + faker.book().author());
        book.setDatePublished(faker.date().past(10000, TimeUnit.DAYS).toString());
        book.setIsbnNumber10(faker.number().digits(10));
        book.setIsbnNumber13(faker.number().digits(13));
        book.setPublisher(faker.book().publisher());
        book.setEdition( faker.number().digit());
        book.setBookCondition("NEW");
        book.setPrice(faker.number().numberBetween(1, 500));
        book.setDescription(faker.lorem().paragraph(faker.number().numberBetween(1, 10)));
        book.setSchool(faker.university().name());
        book.setBook_cover_image(faker.name().fullName());

        return book;
    }
}
