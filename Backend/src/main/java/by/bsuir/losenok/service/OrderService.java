package by.bsuir.losenok.service;

import by.bsuir.losenok.dto.OrderDTO;

import java.util.List;

public interface OrderService extends GenericService<OrderDTO, Long> {
    List<OrderDTO> getAllOrders(int offset, int limit);
    Long getAllOrdersNumber();
    List<OrderDTO> getOrdersByUser(Long userId);
}
