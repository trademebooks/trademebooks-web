package com.chosensolutions;

import com.chosensolutions.cusbe.utils.HTTP;
import com.google.gson.*;
import org.junit.Test;

import static org.junit.Assert.assertTrue;

public class SearchFunctionTest {

    @Test
    public void HTTPGet() throws Exception {
        String url = "https://www.googleapis.com/books/v1/volumes?q=calculus%20spivak";
        String response = HTTP.get(url);
        HTTP.prettyPrint(response);
        assertTrue(response.length() > 0);
    }

    @Test
    public void getJsonDataFromGoogleBooksAPI() throws Exception {
        String url = "https://www.googleapis.com/books/v1/volumes?q=calculus%20spivak";
        String response = HTTP.get(url);

        JsonElement jelement = new JsonParser().parse(response);
        JsonObject jsonObject = jelement.getAsJsonObject();

        JsonPrimitive totalItems = jsonObject.getAsJsonPrimitive("totalItems");
        JsonArray items = jsonObject.getAsJsonArray("items");
        System.out.println(totalItems.getAsInt());
        System.out.println(items);

        System.out.println(jsonObject);

        for (JsonElement item : items) {
            System.out.println(item.getAsJsonObject().getAsJsonPrimitive("id"));
        }

        assertTrue(totalItems.isNumber());
    }
}