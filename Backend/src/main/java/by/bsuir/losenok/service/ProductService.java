package by.bsuir.losenok.service;

import by.bsuir.losenok.dto.ProductDTO;

import java.util.List;
import java.util.Set;

public interface ProductService extends GenericService<ProductDTO, Long> {
    List<ProductDTO> getProducts(int offset, int limit, Integer minPrice, Integer maxPrice);
    Long getNumberOfProducts(Integer minPrice, Integer maxPrice);
    List<ProductDTO> getProductsByTypes(int offset, int limit, Set<Long> typesIds, Integer minPrice, Integer maxPrice);
    Long getNumberOfProductsByTypes(Set<Long> typesIds, Integer minPrice, Integer maxPrice);
}
