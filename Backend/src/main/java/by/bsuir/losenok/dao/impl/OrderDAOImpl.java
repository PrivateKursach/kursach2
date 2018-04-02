package by.bsuir.losenok.dao.impl;

import by.bsuir.losenok.dao.OrderDAO;
import by.bsuir.losenok.entity.Order;
import org.springframework.stereotype.Repository;

@Repository
public class OrderDAOImpl extends GenericDAOImpl<Order, Long> implements OrderDAO {

    public OrderDAOImpl() {
        super(Order.class);
    }
}
