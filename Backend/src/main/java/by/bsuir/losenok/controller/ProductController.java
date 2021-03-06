package by.bsuir.losenok.controller;

import by.bsuir.losenok.dto.ProductDTO;
import by.bsuir.losenok.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

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
            @RequestParam(value = "limit", required = false, defaultValue = "20") Integer limit,
            @RequestParam(value = "type", required = false) Set<Long> types,
            @RequestParam(value = "minPrice", required = false) Integer minPrice,
            @RequestParam(value = "maxPrice", required = false) Integer maxPrice) {

        Long numberOfProducts;
        List<ProductDTO> productDTOList;
        if (types == null) {
            numberOfProducts = productService.getNumberOfProducts(minPrice, maxPrice);
            productDTOList = productService.getProducts(offset, limit, minPrice, maxPrice);
        } else {
            numberOfProducts = productService.getNumberOfProductsByTypes(types, minPrice, maxPrice);
            productDTOList = productService.getProductsByTypes(offset, limit, types, minPrice, maxPrice);
        }
        return ResponseEntity.ok().header(TOTAL_COUNT_HEADER_NAME, String.valueOf(numberOfProducts)).body(productDTOList);
    }

    @GetMapping("/{productId}")
    public ResponseEntity<ProductDTO> getProductById(@PathVariable Long productId) {
        return ResponseEntity.ok(productService.getById(productId));
    }

    @PostMapping
    public ResponseEntity<ProductDTO> createProduct(@RequestBody ProductDTO productDTO) {
        return ResponseEntity.ok(productService.add(productDTO));
    }

    @PutMapping("/{productId}")
    public ResponseEntity<ProductDTO> updateProduct(@PathVariable Long productId, @RequestBody ProductDTO productDTO) {
        productDTO.setId(productId);
        return ResponseEntity.ok(productService.update(productDTO));
    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long productId) {
        productService.delete(productId);
        return ResponseEntity.noContent().build();
    }
}
