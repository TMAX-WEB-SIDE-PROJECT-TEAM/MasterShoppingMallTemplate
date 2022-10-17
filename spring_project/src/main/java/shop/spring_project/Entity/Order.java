package shop.spring_project.Entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int product_id;

    private int buyer_id;

    private LocalDateTime ordered_at;

    @Enumerated(EnumType.STRING)
    private OrderStatus status;

    private int quantity;

    private Long invoice;

    private int option_id;
}
