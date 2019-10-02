package com.chosensolutions.trademebooks;

import com.chosensolutions.trademebooks.controllers.pages.PagesController;
import org.junit.Test;

import static org.junit.Assert.*;

public class AppTest {

    // a controller test
    @Test
    public void testApp() {
        PagesController pagesController = new PagesController();
        String aboutPage = pagesController.about();
        assertEquals(aboutPage, "pages/about");
    }
}
