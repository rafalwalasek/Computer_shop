package com.walas.shop;

import com.walas.shop.model.Category;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class CategoryTest {
    @Test
    public void shouldCreateCategory() {
        Category category = new Category();
        assertNotNull(category);
    }
    @Test
    public void shouldSetAndGet() {

    }
}
