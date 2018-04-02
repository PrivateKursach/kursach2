package by.bsuir.losenok.dto.converter.impl;

import by.bsuir.losenok.dto.OrderDTO;
import by.bsuir.losenok.dto.converter.DTOConverter;
import by.bsuir.losenok.entity.Order;
import by.bsuir.losenok.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Component
public class OrderDTOConverter implements DTOConverter<Order, OrderDTO> {

    @Autowired
    private UserDTOConverter userDTOConverter;
    @Autowired
    private ProductDTOConverter productDTOConverter;

    @Override
    public OrderDTO getDto(Order entity) {
        OrderDTO orderDTO = new OrderDTO();
        orderDTO.setId(entity.getId());
        orderDTO.setUser(userDTOConverter.getDto(entity.getUser()));
        orderDTO.setCreatedDate(entity.getCreatedDate());
        orderDTO.setTotalPrice(entity.getTotalPrice());
        orderDTO.setStatus(entity.getStatus());
        orderDTO.setProducts(productDTOConverter.getDtoList(new ArrayList<>(entity.getProducts())));
        return orderDTO;
    }

    @Override
    public Order getEntity(OrderDTO dto) {
        Order order = new Order();
        order.setId(dto.getId());
        order.setUser(userDTOConverter.getEntity(dto.getUser()));
        order.setCreatedDate(dto.getCreatedDate());
        order.setTotalPrice(dto.getTotalPrice());
        order.setStatus(dto.getStatus());
        if (!dto.getProducts().isEmpty()) {
            Set<Product> products = new HashSet<>(dto.getProducts().size());
            products.addAll(dto.getProducts().stream().map(productDTO -> productDTOConverter.getEntity(productDTO)).collect(Collectors.toList()));
            order.setProducts(products);
        }
        return order;
    }

    @Override
    public List<OrderDTO> getDtoList(List<Order> entityList) {
        List<OrderDTO> orderDTOList = new ArrayList<>(entityList.size());
        orderDTOList.addAll(entityList.stream().map(this::getDto).collect(Collectors.toList()));
        return orderDTOList;
    }
}
