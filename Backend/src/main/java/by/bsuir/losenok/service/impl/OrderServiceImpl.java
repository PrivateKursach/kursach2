package by.bsuir.losenok.service.impl;

import by.bsuir.losenok.dao.OrderDAO;
import by.bsuir.losenok.dto.OrderDTO;
import by.bsuir.losenok.dto.converter.impl.OrderDTOConverter;
import by.bsuir.losenok.entity.Order;
import by.bsuir.losenok.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Service
@Transactional
public class OrderServiceImpl extends GenericServiceImpl<Order, OrderDTO, Long> implements OrderService {

    private OrderDAO orderDAO;
    private OrderDTOConverter orderDTOConverter;

    @Override
    public OrderDTO add(OrderDTO dto) {
        dto.setCreatedDate(LocalDate.now());
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
