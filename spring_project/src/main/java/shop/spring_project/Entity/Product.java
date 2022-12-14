package shop.spring_project.Entity;

import lombok.Getter;
import lombok.Setter;
import shop.spring_project.Exception.NotEnoughStockException;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long lg_category_id;

    private Long md_category_id;

    private Long sm_category_id;

    private Long code;

    private String name;

    private int price;

    private int limit;

    private String summary;

    private String content;

    private LocalDateTime created_at;

    private LocalDateTime updated_at;

    private int option_id;

    private int warehouse_id;

    private int quantity;

    private int cost;

    /*
    public void addStock(int quantity) {this.quantity += quantity;}

    public void removeStock(int quantity) {
        int restStock = this.quantity - quantity;
        if (restStock < 0) {
            throw new NotEnoughStockException("need more stock");
        }
        this.quantity = restStock;
    }
    */
}
