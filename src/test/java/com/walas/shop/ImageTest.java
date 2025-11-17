package com.walas.shop;

import com.walas.shop.model.Image;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class ImageTest {
    @Test
    public void shouldCreateImage() {
        Image image = new Image();
        assertNotNull(image);
    }
    @Test
    public void shouldSetAndGetFields() {
        Image image = new Image();

        image.setFileName("image.jpg");
        image.setFileType("image/jpeg");
        image.setDownloadUrl("http://example.com/test.jpg");

        assertEquals("image.jpg", image.getFileName());
        assertEquals("image/jpeg" , image.getFileType());
        assertEquals("http://example.com/test.jpg", image.getDownloadUrl());
    }
}
