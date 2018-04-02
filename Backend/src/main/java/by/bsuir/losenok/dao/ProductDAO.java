package by.bsuir.losenok.dao;

import by.bsuir.losenok.entity.Product;

import java.util.List;
import java.util.Set;

public interface ProductDAO extends GenericDAO<Product, Long> {
    List<Product> getProducts(int offset, int limit, Integer minPrice, Integer maxPrice);
    Long getNumberOfProducts(Integer minPrice, Integer maxPrice);
    List<Product> getProductsByTypes(int offset, int limit, Set<Long> typesIds, Integer minPrice, Integer maxPrice);
    Long getNumberOfProductsByTypes(Set<Long> typesIds, Integer minPrice, Integer maxPrice);
}
