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

@Service
@Transactional
public class ProductServiceImpl extends GenericServiceImpl<Product, ProductDTO, Long> implements ProductService {

    private ProductDAO productDAO;
    private ProductDTOConverter productDTOConverter;

    @Override
    public List<ProductDTO> getProducts(int offset, int limit) {
        List<Product> products = productDAO.getProducts(offset, limit);
        return productDTOConverter.getDtoList(products);
    }

    @Override
    public Long getNumberOfProducts() {
        return productDAO.getNumberOfProducts();
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
