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
    public void shouldSetAndGetFields() {
        Product product = new Product();

        product.setName("Ryzen 5");
        product.setBrand("AMD");
        product.setInventory(10);
        product.setDescription("7500X3D");

        assertEquals("Ryzen 5", product.getName());
        assertEquals("AMD", product.getBrand());
        assertEquals(10, product.getInventory());
        assertEquals("7500X3D", product.getDescription());
    }
}
