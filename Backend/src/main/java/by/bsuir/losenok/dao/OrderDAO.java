package by.bsuir.losenok.dao;

import by.bsuir.losenok.entity.Order;

import java.util.List;

public interface OrderDAO extends GenericDAO<Order, Long> {
    List<Order> getAllOrders(int offset, int limit);
    Long getAllOrdersNumber();
    List<Order> getOrdersByUser(Long userId);
    Long getNumberOfOrdersByProduct(Long productId);
}
