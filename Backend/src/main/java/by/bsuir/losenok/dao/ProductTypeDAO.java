package by.bsuir.losenok.dao;

import by.bsuir.losenok.entity.ProductType;

import java.util.List;

public interface ProductTypeDAO extends GenericDAO<ProductType, Long> {
    List<ProductType> getAllProductTypes();
}
