package by.bsuir.losenok.dao.impl;

import by.bsuir.losenok.dao.ProductDAO;
import by.bsuir.losenok.entity.Product;
import org.springframework.stereotype.Repository;

import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class ProductDAOImpl extends GenericDAOImpl<Product, Long> implements ProductDAO {

    public ProductDAOImpl() {
        super(Product.class);
    }

    @Override
    public List<Product> getProducts() {
        TypedQuery<Product> query = entityManager.createQuery("select p from Product p", Product.class);
        return query.getResultList();
    }
}
