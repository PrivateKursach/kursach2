package by.bsuir.losenok.controller;

import by.bsuir.losenok.dto.ProductsByTypeStatsDTO;
import by.bsuir.losenok.dto.SalesByTypesStatsDTO;
import by.bsuir.losenok.service.StatsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/stats")
public class StatsController {

    @Autowired
    private StatsService statsService;

    @GetMapping("/sales-by-types")
    public ResponseEntity<List<SalesByTypesStatsDTO>> getSalesByTypesStats() {
        return ResponseEntity.ok(statsService.getSalesByTypesStats());
    }

    @GetMapping("/products-by-types")
    public ResponseEntity<List<ProductsByTypeStatsDTO>> getProductsByTypesStats() {
        return ResponseEntity.ok(statsService.getProductsByTypesStats());
    }
}
