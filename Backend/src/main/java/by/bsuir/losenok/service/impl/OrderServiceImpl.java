package by.bsuir.losenok.service.impl;

import by.bsuir.losenok.dao.OrderDAO;
import by.bsuir.losenok.dto.OrderDTO;
import by.bsuir.losenok.dto.ProductDTO;
import by.bsuir.losenok.dto.converter.impl.OrderDTOConverter;
import by.bsuir.losenok.entity.Order;
import by.bsuir.losenok.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
@Transactional
public class OrderServiceImpl extends GenericServiceImpl<Order, OrderDTO, Long> implements OrderService {

    private OrderDAO orderDAO;
    private OrderDTOConverter orderDTOConverter;

    @Override
    public List<OrderDTO> getAllOrders(int offset, int limit) {
        return orderDTOConverter.getDtoList(orderDAO.getAllOrders(offset, limit));
    }

    @Override
    public Long getAllOrdersNumber() {
        return orderDAO.getAllOrdersNumber();
    }

    @Override
    public List<OrderDTO> getOrdersByUser(Long userId) {
        return orderDTOConverter.getDtoList(orderDAO.getOrdersByUser(userId));
    }

    @Override
    public OrderDTO add(OrderDTO dto) {
        dto.setCreatedDate(LocalDate.now());
        Integer totalPrice = 0;
        for (ProductDTO productDTO : dto.getProducts()) {
            totalPrice += productDTO.getPrice();
        }
        dto.setTotalPrice(totalPrice);
        dto.setStatus(1);
        return super.add(dto);
    }

    @Autowired
    public void setOrderDAO(OrderDAO orderDAO) {
        setGenericDao(orderDAO);
        this.orderDAO = orderDAO;
    }

    @Autowired
    public void setOrderDTOConverter(OrderDTOConverter orderDTOConverter) {
        setDtoConverter(orderDTOConverter);
        this.orderDTOConverter = orderDTOConverter;
    }
}
