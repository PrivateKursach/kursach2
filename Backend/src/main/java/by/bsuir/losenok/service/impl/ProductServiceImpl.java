package by.bsuir.losenok.service.impl;

import by.bsuir.losenok.dao.ProductDAO;
import by.bsuir.losenok.dto.ProductDTO;
import by.bsuir.losenok.dto.converter.impl.ProductDTOConverter;
import by.bsuir.losenok.entity.Product;
import by.bsuir.losenok.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Service
@Transactional
public class ProductServiceImpl extends GenericServiceImpl<Product, ProductDTO, Long> implements ProductService {

    private ProductDAO productDAO;
    private ProductDTOConverter productDTOConverter;

    @Override
    public List<ProductDTO> getProducts(int offset, int limit, Integer minPrice, Integer maxPrice) {
        List<Product> products = productDAO.getProducts(offset, limit, minPrice, maxPrice);
        return productDTOConverter.getDtoList(products);
    }

    @Override
    public Long getNumberOfProducts(Integer minPrice, Integer maxPrice) {
        return productDAO.getNumberOfProducts(minPrice, maxPrice);
    }

    @Override
    public List<ProductDTO> getProductsByTypes(int offset, int limit, Set<Long> typesIds, Integer minPrice, Integer maxPrice) {
        return productDTOConverter.getDtoList(productDAO.getProductsByTypes(offset, limit, typesIds, minPrice, maxPrice));
    }

    @Override
    public Long getNumberOfProductsByTypes(Set<Long> typesIds, Integer minPrice, Integer maxPrice) {
        return productDAO.getNumberOfProductsByTypes(typesIds, minPrice, maxPrice);
    }

    @Autowired
    public void setProductDAO(ProductDAO productDAO) {
        setGenericDao(productDAO);
        this.productDAO = productDAO;
    }

    @Autowired
    public void setProductDTOConverter(ProductDTOConverter productDTOConverter) {
        setDtoConverter(productDTOConverter);
        this.productDTOConverter = productDTOConverter;
    }
}
