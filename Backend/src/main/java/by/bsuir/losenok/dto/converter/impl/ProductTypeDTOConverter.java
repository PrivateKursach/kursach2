package by.bsuir.losenok.dto.converter.impl;

import by.bsuir.losenok.dto.ProductTypeDTO;
import by.bsuir.losenok.dto.converter.DTOConverter;
import by.bsuir.losenok.entity.ProductType;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class ProductTypeDTOConverter implements DTOConverter<ProductType, ProductTypeDTO> {

    @Override
    public ProductTypeDTO getDto(ProductType entity) {
        ProductTypeDTO productTypeDTO = new ProductTypeDTO();
        productTypeDTO.setId(entity.getId());
        productTypeDTO.setName(entity.getName());
        return productTypeDTO;
    }

    @Override
    public ProductType getEntity(ProductTypeDTO dto) {
        ProductType productType = new ProductType();
        productType.setId(dto.getId());
        productType.setName(dto.getName());
        return productType;
    }

    @Override
    public List<ProductTypeDTO> getDtoList(List<ProductType> entityList) {
        List<ProductTypeDTO> productTypeDTOList = new ArrayList<>(entityList.size());
        productTypeDTOList.addAll(entityList.stream().map(this::getDto).collect(Collectors.toList()));
        return productTypeDTOList;
    }
}
