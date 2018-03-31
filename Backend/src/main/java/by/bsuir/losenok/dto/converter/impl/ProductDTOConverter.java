package by.bsuir.losenok.dto.converter.impl;

import by.bsuir.losenok.dto.ProductDTO;
import by.bsuir.losenok.dto.converter.DTOConverter;
import by.bsuir.losenok.entity.Product;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class ProductDTOConverter implements DTOConverter<Product, ProductDTO> {

    @Override
    public ProductDTO getDto(Product entity) {
        ProductDTO productDTO = new ProductDTO();
        productDTO.setId(entity.getId());
        productDTO.setName(entity.getName());
        productDTO.setDescription(entity.getDescription());
        productDTO.setImageUrl(entity.getImageUrl());
        productDTO.setPrice(entity.getPrice());
        return productDTO;
    }

    @Override
    public Product getEntity(ProductDTO dto) {
        Product product = new Product();
        product.setId(dto.getId());
        product.setName(dto.getName());
        product.setDescription(dto.getDescription());
        product.setImageUrl(dto.getImageUrl());
        product.setPrice(dto.getPrice());
        return product;
    }

    @Override
    public List<ProductDTO> getDtoList(List<Product> entityList) {
        List<ProductDTO> productDTOList = new ArrayList<>(entityList.size());
        productDTOList.addAll(entityList.stream().map(this::getDto).collect(Collectors.toList()));
        return productDTOList;
    }
}
