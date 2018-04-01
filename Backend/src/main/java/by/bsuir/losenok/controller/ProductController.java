package by.bsuir.losenok.controller;

import by.bsuir.losenok.dto.ProductDTO;
import by.bsuir.losenok.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/products")
public class ProductController {

    private static final String TOTAL_COUNT_HEADER_NAME = "X-Total-Count";

    @Autowired
    private ProductService productService;

    @GetMapping
    @CrossOrigin(exposedHeaders = "X-Total-Count")
    public ResponseEntity<List<ProductDTO>> getProducts(
            @RequestParam(value = "offset", required = false, defaultValue = "0") Integer offset,
            @RequestParam(value = "limit", required = false, defaultValue = "20") Integer limit) {

        Long numberOfProducts = productService.getNumberOfProducts();
        List<ProductDTO> productDTOList = productService.getProducts(offset, limit);
        return ResponseEntity.ok().header(TOTAL_COUNT_HEADER_NAME, String.valueOf(numberOfProducts)).body(productDTOList);
    }
}
