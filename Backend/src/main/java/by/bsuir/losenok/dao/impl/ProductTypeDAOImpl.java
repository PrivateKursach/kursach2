package by.bsuir.losenok.dao.impl;

import by.bsuir.losenok.dao.ProductTypeDAO;
import by.bsuir.losenok.entity.ProductType;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProductTypeDAOImpl extends GenericDAOImpl<ProductType, Long> implements ProductTypeDAO {

    public ProductTypeDAOImpl() {
        super(ProductType.class);
    }

    @Override
    public List<ProductType> getAllProductTypes() {
        return entityManager.createQuery("select pt from ProductType pt", ProductType.class).getResultList();
    }
}
