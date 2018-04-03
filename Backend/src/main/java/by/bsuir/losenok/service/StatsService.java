package by.bsuir.losenok.service;

import by.bsuir.losenok.dto.NumberOfOrdersStatsDTO;
import by.bsuir.losenok.dto.ProductsByTypeStatsDTO;
import by.bsuir.losenok.dto.SalesByTypesStatsDTO;

import java.util.List;

public interface StatsService {
    List<SalesByTypesStatsDTO> getSalesByTypesStats();
    List<ProductsByTypeStatsDTO> getProductsByTypesStats();
    List<NumberOfOrdersStatsDTO> getNumberOfOrdersStats();
}
