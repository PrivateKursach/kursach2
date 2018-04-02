package by.bsuir.losenok.controller;

import by.bsuir.losenok.dto.OrderDTO;
import by.bsuir.losenok.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/orders")
public class OrderController {
    private static final String TOTAL_COUNT_HEADER_NAME = "X-Total-Count";

    @Autowired
    private OrderService orderService;

    @PostMapping
    public ResponseEntity<OrderDTO> createOrder(@RequestBody OrderDTO orderDTO) {
        return ResponseEntity.ok(orderService.add(orderDTO));
    }

    @GetMapping
    public ResponseEntity<List<OrderDTO>> getOrders(
            @RequestParam(value = "offset", required = false, defaultValue = "0") Integer offset,
            @RequestParam(value = "limit", required = false, defaultValue = "20") Integer limit) {

        Long ordersNumber = orderService.getAllOrdersNumber();
        List<OrderDTO> orderDTOList = orderService.getAllOrders(offset, limit);
        return ResponseEntity.ok().header(TOTAL_COUNT_HEADER_NAME, String.valueOf(ordersNumber)).body(orderDTOList);
    }
}
