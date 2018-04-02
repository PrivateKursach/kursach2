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
    public List<Product> getProducts(int offset, int limit, Integer minPrice, Integer maxPrice) {
        String sqlQuery = "select p from Product p";
        if (minPrice != null) {
            sqlQuery += " where p.price > :minPrice";
        }
        if (maxPrice != null) {
            sqlQuery += (minPrice == null ? " where" : " and") + " p.price < :maxPrice";
        }
        TypedQuery<Product> query = entityManager.createQuery(sqlQuery, Product.class);
        if (minPrice != null) {
            query.setParameter("minPrice", minPrice);
        }
        if (maxPrice != null) {
            query.setParameter("maxPrice", maxPrice);
        }
        return query.setFirstResult(offset).setMaxResults(limit).getResultList();
    }

    @Override
    public Long getNumberOfProducts(Integer minPrice, Integer maxPrice) {
        String sqlQuery = "select count(p.id) from Product p";
        if (minPrice != null) {
            sqlQuery += " where p.price > :minPrice";
        }
        if (maxPrice != null) {
            sqlQuery += (minPrice == null ? " where" : " and") + " p.price < :maxPrice";
        }
        TypedQuery<Long> query = entityManager.createQuery(sqlQuery, Long.class);
        if (minPrice != null) {
            query.setParameter("minPrice", minPrice);
        }
        if (maxPrice != null) {
            query.setParameter("maxPrice", maxPrice);
        }
        return query.getSingleResult();
    }

    @Override
    public List<Product> getProductsByTypes(int offset, int limit, Set<Long> typesIds, Integer minPrice, Integer maxPrice) {
        String sqlQuery = "select p from Product p join fetch p.types t where t.id in :typesIds";
        if (minPrice != null) {
            sqlQuery += " and p.price > :minPrice";
        }
        if (maxPrice != null) {
            sqlQuery += " and p.price < :maxPrice";
        }
        TypedQuery<Product> query = entityManager.createQuery(sqlQuery, Product.class);
        if (minPrice != null) {
            query.setParameter("minPrice", minPrice);
        }
        if (maxPrice != null) {
            query.setParameter("maxPrice", maxPrice);
        }
        return query.setParameter("typesIds", typesIds).setFirstResult(offset).setMaxResults(limit).getResultList();
    }

    @Override
    public Long getNumberOfProductsByTypes(Set<Long> typesIds, Integer minPrice, Integer maxPrice) {
        String sqlQuery = "select count(distinct p.id) from Product p join p.types t where t.id in :typesIds";
        if (minPrice != null) {
            sqlQuery += " and p.price > :minPrice";
        }
        if (maxPrice != null) {
            sqlQuery += " and p.price < :maxPrice";
        }
        TypedQuery<Long> query = entityManager.createQuery(sqlQuery, Long.class);
        if (minPrice != null) {
            query.setParameter("minPrice", minPrice);
        }
        if (maxPrice != null) {
            query.setParameter("maxPrice", maxPrice);
        }
        return query.setParameter("typesIds", typesIds).getSingleResult();
    }
}
