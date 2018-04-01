package by.bsuir.losenok.service;

import by.bsuir.losenok.dto.ProductDTO;

import java.util.List;

public interface ProductService extends GenericService<ProductDTO, Long> {
    List<ProductDTO> getProducts(int offset, int limit);
    Long getNumberOfProducts();
}
