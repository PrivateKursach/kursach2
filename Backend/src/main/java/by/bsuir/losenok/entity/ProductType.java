package by.bsuir.losenok.entity;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "es_product_type")
public class ProductType extends EntityObject<Long> {

    private String name;
    private Set<Product> products;

    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @ManyToMany(mappedBy = "types")
    public Set<Product> getProducts() {
        return products;
    }

    public void setProducts(Set<Product> products) {
        this.products = products;
    }
}
