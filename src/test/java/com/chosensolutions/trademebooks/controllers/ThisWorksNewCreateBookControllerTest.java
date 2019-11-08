package com.chosensolutions.trademebooks.controllers;

import com.chosensolutions.trademebooks.models.Book;
import com.chosensolutions.trademebooks.services.book.BookService;
import com.chosensolutions.trademebooks.utils.ValidationErrorService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.hamcrest.Matchers;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = BookController.class, secure=false)
public class ThisWorksNewCreateBookControllerTest {

    @MockBean
    private BookService bookService;

    @MockBean
    private ValidationErrorService validationErrorService;

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testCreateABookWithNoUser() throws Exception {
        Book book = new Book();
        book.setTitle("RESTful Laravel: A structured approach");

        // setup mock
        //when(bookService.createBook(book)).thenReturn(book);
        mockMvc.perform(post("/api/web/v1/books")
                .content(asJsonString(book))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message", Matchers.is("Creating the new book was successful!")));
    }

    private static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        }
        catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}