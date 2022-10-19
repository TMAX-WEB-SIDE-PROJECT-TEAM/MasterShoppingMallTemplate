package shop.spring_project.Entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
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

    private Long summary;

    private Long content;

    private LocalDateTime created_at;

    private LocalDateTime updated_at;
}
