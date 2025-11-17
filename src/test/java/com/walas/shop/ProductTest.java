package com.walas.shop;

import com.walas.shop.model.Product;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class ProductTest {
    @Test
    public void shouldCreateProduct() {
        Product product = new Product();
        assertNotNull(product);
    }
    @Test
    public void shouldSetAndGet() {

    }
}
