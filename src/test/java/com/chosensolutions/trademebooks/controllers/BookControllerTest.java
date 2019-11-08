package com.chosensolutions.trademebooks.controllers;

import com.chosensolutions.trademebooks.models.Book;
import com.chosensolutions.trademebooks.services.book.BookService;
import com.chosensolutions.trademebooks.utils.ValidationErrorService;

import org.junit.After;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.*;

import static org.hamcrest.Matchers.is;
import static org.hamcrest.collection.IsCollectionWithSize.hasSize;

import org.hamcrest.core.IsNull;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.mockito.Mockito.when;

import org.springframework.http.MediaType;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = BookController.class, secure = false)
public class BookControllerTest {

    @MockBean
    private BookService bookService;

    @MockBean
    private ValidationErrorService validationErrorService;

    @Autowired
    private MockMvc mockMvc;

    private List<Book> mockBooks = new ArrayList<>();

    @Before
    public void setUp() {
        Book mockBook1 = new Book();
        mockBook1.setTitle("calculus 1");
        Book mockBook2 = new Book();
        mockBook2.setTitle("calculus 2");
        Book mockBook3 = new Book();
        mockBook3.setTitle("calculus 3");

        mockBooks.add(mockBook1);
        mockBooks.add(mockBook2);
        mockBooks.add(mockBook3);
    }

    @Test
    public void testSuccessfullyGetAllBooks() throws Exception {
        when(bookService.getAllBooks("")).thenReturn(mockBooks);

        mockMvc.perform(get("/api/web/v1/books"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(jsonPath("$.message", is("Here is a list of all the books in the database")))
                .andExpect(jsonPath("$.data", hasSize(3)))
                .andExpect(jsonPath("$.errors", IsNull.nullValue()));
    }

    @After
    public void tearDown() {

    }

}
