package com.chosensolutions.cusbe.services;

import com.chosensolutions.cusbe.models.BookStore;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class BookStoreService {

    private List<BookStore> bookStores = new ArrayList<>(
            Arrays.asList(
                    new BookStore("Book store 1", "description 1"),
                    new BookStore("Book store 2", "description 2"),
                    new BookStore("Book Store 3", "description 3")
            )
    );

    public List<BookStore> getAll() {
        return bookStores;
    }

    public BookStore getById() {
        return bookStores.get(0);
    }
}
