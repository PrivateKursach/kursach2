package by.bsuir.losenok.dao;

import by.bsuir.losenok.entity.Product;

import java.util.List;

public interface ProductDAO extends GenericDAO<Product, Long> {
    List<Product> getProducts(int offset, int limit);
    Long getNumberOfProducts();
}
