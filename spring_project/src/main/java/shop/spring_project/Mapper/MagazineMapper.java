package shop.spring_project.Mapper;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;
import shop.spring_project.DTO.MagazineDTO;
import shop.spring_project.Entity.Magazine;

@Component
public class MagazineMapper extends ModelMapper {
    public Magazine convertDtoToEntity(MagazineDTO magazineDTO) { return this.map(magazineDTO, Magazine.class);}

    public MagazineDTO convertEntityToDto(Magazine magazine) {return this.map(magazine, MagazineDTO.class);}
}
