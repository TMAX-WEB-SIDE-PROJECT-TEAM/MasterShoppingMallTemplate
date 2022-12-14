package shop.spring_project.DTO;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
@Getter
@Setter
public class ProductDTO {

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
}
