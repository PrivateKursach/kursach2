package by.bsuir.losenok.dto;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.ArrayList;
import java.util.List;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProductDTO extends DTO<Long> {
    private static final long serialVersionUID = -6591529583863284248L;

    private String name;
    private String description;
    private String imageUrl;
    private Integer price;
    private List<ProductTypeDTO> types = new ArrayList<>();

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public List<ProductTypeDTO> getTypes() {
        return types;
    }

    public void setTypes(List<ProductTypeDTO> types) {
        this.types = types;
    }
}
