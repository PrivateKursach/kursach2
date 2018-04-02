package by.bsuir.losenok.dao.impl;

import by.bsuir.losenok.dao.ProductDAO;
import by.bsuir.losenok.entity.Product;
import org.springframework.stereotype.Repository;

import javax.persistence.TypedQuery;
import java.util.List;
import java.util.Set;

@Repository
public class ProductDAOImpl extends GenericDAOImpl<Product, Long> implements ProductDAO {

    public ProductDAOImpl() {
        super(Product.class);
    }

    @Override
    public List<Product> getProducts(int offset, int limit) {
        TypedQuery<Product> query = entityManager.createQuery("select p from Product p", Product.class);
        return query.setFirstResult(offset).setMaxResults(limit).getResultList();
    }

    @Override
    public Long getNumberOfProducts() {
        return entityManager.createQuery("select count(p.id) from Product p", Long.class).getSingleResult();
    }

    @Override
    public List<Product> getProductsByTypes(int offset, int limit, Set<Long> typesIds) {
        TypedQuery<Product> query = entityManager.createQuery("select p from Product p join fetch p.types t where t.id in :typesIds", Product.class);
        return query.setParameter("typesIds", typesIds).setFirstResult(offset).setMaxResults(limit).getResultList();
    }

    @Override
    public Long getNumberOfProductsByTypes(Set<Long> typesIds) {
        TypedQuery<Long> query = entityManager.createQuery("select count(distinct p.id) from Product p join p.types t where t.id in :typesIds", Long.class);
        return query.setParameter("typesIds", typesIds).getSingleResult();
    }
}
