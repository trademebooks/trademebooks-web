package com.chosensolutions;

import com.chosensolutions.controllers.PagesController;
import com.chosensolutions.models.Book;
import com.chosensolutions.services.BookService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;

//@RunWith(SpringRunner.class)
@SpringBootTest
public class BookServiceTest {

    @Autowired
    BookService bookService;

    @Test
    public void testViewABookById() {
        // http://www.baeldung.com/spring-boot-testing
        //Book book2 = bookService.getBookById("2");
        //assertEquals("2", book2.getId());
    }

    @Test
    public void testViewAllBooks() {
        // http://www.baeldung.com/spring-boot-testing

        bookService.getAllBooks();
    }
}
