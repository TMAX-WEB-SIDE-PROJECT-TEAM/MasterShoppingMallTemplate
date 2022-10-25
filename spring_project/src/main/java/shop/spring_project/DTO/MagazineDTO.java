package shop.spring_project.DTO;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import shop.spring_project.Entity.Magazine;

import java.util.Optional;
@Getter
@Setter
public class MagazineDTO {

    private Long id;

    private Long lgId;

    private Long mdId;

    private Long smId;

    private String content;

}
