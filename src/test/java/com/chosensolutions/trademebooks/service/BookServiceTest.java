package com.chosensolutions;

import com.chosensolutions.trademebooks.models.Book;
import com.chosensolutions.trademebooks.services.book.BookService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BookServiceTest {

    @Autowired
    BookService bookService;
    @Test
    public void testViewABookById() {
       //http://www.baeldung.com/spring-boot-testing
       //Book book = bookService.getBookById(1L);
       //assertEquals(new Long(2L), book2.getId());
    }

    @Test
    public void testViewAllBooks() {
        List<Book> books = bookService.getAllBooks();

        System.out.println(books);
    }
}
