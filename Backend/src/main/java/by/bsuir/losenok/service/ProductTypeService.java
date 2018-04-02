package by.bsuir.losenok.service;

import by.bsuir.losenok.dto.ProductTypeDTO;

import java.util.List;

public interface ProductTypeService extends GenericService<ProductTypeDTO, Long> {
    List<ProductTypeDTO> getAllProductTypes();
}
