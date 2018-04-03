package by.bsuir.losenok.service.impl;

import by.bsuir.losenok.dao.OrderDAO;
import by.bsuir.losenok.dao.ProductDAO;
import by.bsuir.losenok.dao.ProductTypeDAO;
import by.bsuir.losenok.dto.SalesByTypesStatsDTO;
import by.bsuir.losenok.entity.Product;
import by.bsuir.losenok.entity.ProductType;
import by.bsuir.losenok.service.StatsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Service
@Transactional
public class StatsServiceImpl implements StatsService {

    @Autowired
    private ProductTypeDAO productTypeDAO;
    @Autowired
    private ProductDAO productDAO;
    @Autowired
    private OrderDAO orderDAO;

    @Override
    public List<SalesByTypesStatsDTO> getSalesByTypesStats() {
        List<ProductType> productTypes = productTypeDAO.getAllProductTypes();
        List<SalesByTypesStatsDTO> salesByTypesStats = new ArrayList<>(productTypes.size());
        for (ProductType productType : productTypes) {
            Long totalSales = 0L;
            List<Product> products = productDAO.getProductsByTypes(0, Integer.MAX_VALUE, Collections.singleton(productType.getId()), null, null);
            for (Product product : products) {
                Long ordersByProduct = orderDAO.getNumberOfOrdersByProduct(product.getId());
                totalSales += product.getPrice() * ordersByProduct;
            }
            SalesByTypesStatsDTO salesByTypesStatsDTO = new SalesByTypesStatsDTO();
            salesByTypesStatsDTO.setProductTypeId(productType.getId());
            salesByTypesStatsDTO.setProductTypeName(productType.getName());
            salesByTypesStatsDTO.setTotalSales(totalSales);
            salesByTypesStats.add(salesByTypesStatsDTO);
        }
        return salesByTypesStats;
    }
}
