package com.chosensolutions;

import com.chosensolutions.controllers.PagesController;
import com.chosensolutions.models.Book;
import com.chosensolutions.services.BookService;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.Assert.assertEquals;

@SpringBootTest
public class BookServiceTest {

    @Autowired
    BookService bookService;

    @Test
    public void testViewABookById() {
        // http://www.baeldung.com/spring-boot-testing
        Book book2 = bookService.getBookById("2");
        assertEquals("2", book2.getId());
    }
}
