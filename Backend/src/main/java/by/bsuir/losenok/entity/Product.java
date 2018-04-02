package by.bsuir.losenok.entity;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "es_product")
public class Product extends EntityObject<Long> {

    private String name;
    private String description;
    private String imageUrl;
    private Integer price;

    private Set<Order> orders;
    private Set<ProductType> types;

    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Column(name = "image_url")
    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    @Column(name = "price")
    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    @ManyToMany(mappedBy = "products")
    public Set<Order> getOrders() {
        return orders;
    }

    public void setOrders(Set<Order> orders) {
        this.orders = orders;
    }

    @ManyToMany
    @JoinTable(name = "es_product_product_type", joinColumns = @JoinColumn(name = "product_id"), inverseJoinColumns = @JoinColumn(name = "product_type_id"))
    public Set<ProductType> getTypes() {
        return types;
    }

    public void setTypes(Set<ProductType> types) {
        this.types = types;
    }
}
