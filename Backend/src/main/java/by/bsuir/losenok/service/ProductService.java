package by.bsuir.losenok.service;

import by.bsuir.losenok.dto.ProductDTO;

import java.util.List;
import java.util.Set;

public interface ProductService extends GenericService<ProductDTO, Long> {
    List<ProductDTO> getProducts(int offset, int limit);
    Long getNumberOfProducts();
    List<ProductDTO> getProductsByTypes(int offset, int limit, Set<Long> typesIds);
    Long getNumberOfProductsByTypes(Set<Long> typesIds);
}
