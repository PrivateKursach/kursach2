package by.bsuir.losenok.dao;

import by.bsuir.losenok.entity.Product;

import java.util.List;
import java.util.Set;

public interface ProductDAO extends GenericDAO<Product, Long> {
    List<Product> getProducts(int offset, int limit);
    Long getNumberOfProducts();
    List<Product> getProductsByTypes(int offset, int limit, Set<Long> typesIds);
    Long getNumberOfProductsByTypes(Set<Long> typesIds);
}
