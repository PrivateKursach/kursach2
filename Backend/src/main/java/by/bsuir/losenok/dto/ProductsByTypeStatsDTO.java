package by.bsuir.losenok.dto;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProductsByTypeStatsDTO {

    private Long productTypeId;
    private String productTypeName;
    private Long productsNumber;

    public Long getProductTypeId() {
        return productTypeId;
    }

    public void setProductTypeId(Long productTypeId) {
        this.productTypeId = productTypeId;
    }

    public String getProductTypeName() {
        return productTypeName;
    }

    public void setProductTypeName(String productTypeName) {
        this.productTypeName = productTypeName;
    }

    public Long getProductsNumber() {
        return productsNumber;
    }

    public void setProductsNumber(Long productsNumber) {
        this.productsNumber = productsNumber;
    }
}
