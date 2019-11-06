package com.chosensolutions.trademebooks.bootstrap;

import com.chosensolutions.trademebooks.models.*;
import com.chosensolutions.trademebooks.repositories.AccountRepository;
import com.chosensolutions.trademebooks.repositories.BookRepository;
import com.chosensolutions.trademebooks.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Component
public class DatabaseSeed implements ApplicationListener<ContextRefreshedEvent> {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        initData();

        bookSeeds();
    }

    private void initData() {
        User user1 = new User();
        user1.setFirstName("Yi Chen");
        user1.setLastName("Zhu");
        user1.setEmail("yichenzhu1337@gmail.com");
        user1.setPassword(bCryptPasswordEncoder.encode("yichen"));
        Account account1 = new Account(user1, "416-293-2507", true);
        user1.setAccount(account1);
        Profile profile1 = new Profile(user1, "yichen", "Yi Chen", "Zhu");
        user1.setProfile(profile1);

        BookStore bookStore = new BookStore(user1, "Yichen's Awesome Bookstore!", "50% off on everything! Just DM me!");

        Book book1 = new Book();
        book1.setTitle("calculus 1");
        book1.setAuthors("John Doe, Bobby Lee, Jane Doe");
        book1.setDatePublished("December 25th, 2019");
        book1.setIsbnNumber10("1234567890");
        book1.setIsbnNumber13("1234567890123");
        book1.setPublisher("Manning Publishing 1");
        book1.setEdition("1");
        book1.setBookCondition("NEW");
        book1.setPrice(100);
        book1.setDescription("This is the best book in the world. Please buy it guys! Message me.");
        book1.setSchool("UofT");
        book1.setBook_cover_image("http://google.com/images/hello.png");

        Book book2 = new Book();
        book2.setTitle("Calculus 2");
        book2.setAuthors("Spivak");
        book2.setDatePublished("December 26th, 2019");
        book2.setIsbnNumber10("1234567891");
        book2.setIsbnNumber13("1234567890124");
        book2.setPublisher("Manning Publishing 2");
        book2.setEdition("1");
        book2.setBookCondition("NEW");
        book2.setPrice(100);
        book2.setDescription("This is the best book in the world. Please buy it guys! Message me.");
        book2.setSchool("UofT");
        book2.setBook_cover_image("http://google.com/images/hello.png");

        Book book3 = new Book();
        book3.setTitle("Calculus 3");
        book3.setAuthors("Spivak 3");
        book3.setDatePublished("December 27th, 2019");
        book3.setIsbnNumber10("1234567892");
        book3.setIsbnNumber13("1234567890125");
        book3.setPublisher("Manning Publishing 3");
        book3.setEdition("1");
        book3.setBookCondition("NEW");
        book3.setPrice(100);
        book3.setDescription("This is the best book in the world. Please buy it guys! Message me.");
        book3.setSchool("UofT");
        book3.setBook_cover_image("http://google.com/images/hello.png");

        List<Book> books = Stream.of(
                book1,
                book2,
                book3
        ).collect(Collectors.toList());

        bookStore.setBooks(books);

        user1.setBookStore(bookStore);

        userRepository.save(user1);
    }

    private void bookSeeds() {
        BookFactory bookFactory = new BookFactory();
        for (int i = 0; i < 20; i++) {
            bookRepository.save(bookFactory.generateBook());
        }
    }
}
