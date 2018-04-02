package by.bsuir.losenok.controller;

import by.bsuir.losenok.dto.ProductTypeDTO;
import by.bsuir.losenok.service.ProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/product-types")
public class ProductTypeController {

    @Autowired
    private ProductTypeService productTypeService;

    @GetMapping
    public ResponseEntity<List<ProductTypeDTO>> getProductTypes() {
        return ResponseEntity.ok(productTypeService.getAllProductTypes());
    }

    @GetMapping("/{typeId}")
    public ResponseEntity<ProductTypeDTO> getProductType(@PathVariable Long typeId) {
        return ResponseEntity.ok(productTypeService.getById(typeId));
    }

    @PostMapping
    public ResponseEntity<ProductTypeDTO> createProductType(@RequestBody ProductTypeDTO productTypeDTO) {
        return ResponseEntity.ok(productTypeService.add(productTypeDTO));
    }

    @PutMapping("/{typeId}")
    public ResponseEntity<ProductTypeDTO> updateProductType(@PathVariable Long typeId, @RequestBody ProductTypeDTO productTypeDTO) {
        productTypeDTO.setId(typeId);
        return ResponseEntity.ok(productTypeService.update(productTypeDTO));
    }

    @DeleteMapping("/{typeId}")
    public ResponseEntity<Void> deleteProductType(@PathVariable Long typeId) {
        productTypeService.delete(typeId);
        return ResponseEntity.noContent().build();
    }
}
