package by.bsuir.losenok.service.impl;

import by.bsuir.losenok.dao.ProductTypeDAO;
import by.bsuir.losenok.dto.ProductTypeDTO;
import by.bsuir.losenok.dto.converter.impl.ProductTypeDTOConverter;
import by.bsuir.losenok.entity.ProductType;
import by.bsuir.losenok.service.ProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ProductTypeServiceImpl extends GenericServiceImpl<ProductType, ProductTypeDTO, Long> implements ProductTypeService {

    private ProductTypeDAO productTypeDAO;
    private ProductTypeDTOConverter productTypeDTOConverter;

    @Override
    public List<ProductTypeDTO> getAllProductTypes() {
        return productTypeDTOConverter.getDtoList(productTypeDAO.getAllProductTypes());
    }

    @Autowired
    public void setProductTypeDAO(ProductTypeDAO productTypeDAO) {
        setGenericDao(productTypeDAO);
        this.productTypeDAO = productTypeDAO;
    }

    @Autowired
    public void setProductTypeDTOConverter(ProductTypeDTOConverter productTypeDTOConverter) {
        setDtoConverter(productTypeDTOConverter);
        this.productTypeDTOConverter = productTypeDTOConverter;
    }
}
