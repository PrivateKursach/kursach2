package by.bsuir.losenok.dao.impl;

import by.bsuir.losenok.dao.OrderDAO;
import by.bsuir.losenok.entity.Order;
import org.springframework.stereotype.Repository;

import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class OrderDAOImpl extends GenericDAOImpl<Order, Long> implements OrderDAO {

    public OrderDAOImpl() {
        super(Order.class);
    }

    @Override
    public List<Order> getAllOrders(int offset, int limit) {
        TypedQuery<Order> query = entityManager.createQuery("select o from by.bsuir.losenok.entity.Order o", Order.class);
        return query.setFirstResult(offset).setMaxResults(limit).getResultList();
    }

    @Override
    public Long getAllOrdersNumber() {
        return entityManager.createQuery("select count(o.id) from by.bsuir.losenok.entity.Order o", Long.class).getSingleResult();
    }

    @Override
    public List<Order> getOrdersByUser(Long userId) {
        TypedQuery<Order> query = entityManager.createQuery("select o from by.bsuir.losenok.entity.Order o where o.user.id = :userId", Order.class);
        return query.setParameter("userId", userId).getResultList();
    }
}
