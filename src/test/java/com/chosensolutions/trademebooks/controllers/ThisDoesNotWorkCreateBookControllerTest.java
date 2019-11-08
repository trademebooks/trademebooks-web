package com.chosensolutions.trademebooks.controllers;

import com.chosensolutions.trademebooks.config.security.JwtAuthenticationEntryPoint;
import com.chosensolutions.trademebooks.config.security.JwtAuthenticationFilter;
import com.chosensolutions.trademebooks.config.security.SecurityConfig;

import com.chosensolutions.trademebooks.models.Book;
import com.chosensolutions.trademebooks.services.auth.UserServiceImpl;
import com.chosensolutions.trademebooks.services.book.BookService;
import com.chosensolutions.trademebooks.utils.ValidationErrorService;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static java.lang.System.out;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = BookController.class, secure=false)
@Import(SecurityConfig.class)
public class ThisDoesNotWorkCreateBookControllerTest {

    @MockBean
    private BookService bookService;

    @MockBean
    private ValidationErrorService validationErrorService;

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private JwtAuthenticationEntryPoint unauthorizedHandler;

    @MockBean
    private UserServiceImpl customUserDetailsService;

    @MockBean
    public JwtAuthenticationFilter jwtAuthenticationFilter;

    @MockBean
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Test
    public void testCreateABookWithNoUser() throws Exception {
        Book book = new Book();
        book.setTitle("RESTful Laravel: A structured approach");

        // setup mock
        //when(bookService.createBook(book)).thenReturn(book);
/*
        mockMvc.perform(post("/api/web/v1/books")
                .content(asJsonString(book))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.message", is("Here is a list of all the books in the database")));
        */
        mockMvc.perform(post("/api/web/v1/books")
                .param("id", "1")
                .param("name", "John Doe"))
                .andDo(print()).andExpect(status().isOk());

    }

    static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        }
        catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}