package shop.spring_project.Service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import shop.spring_project.DTO.MagazineDTO;
import shop.spring_project.Entity.Magazine;
import shop.spring_project.Mapper.MagagineMapper;
import shop.spring_project.Repository.MagazineRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class MagazineService {

    private final MagazineRepository magazineRepository;
    private final MagagineMapper modelMapper = new MagagineMapper();
    public MagazineService(MagazineRepository magazineRepository) {this.magazineRepository = magazineRepository;}

    public MagazineDTO getMagazine(Long id) {
        return modelMapper.convertEntityToDto(magazineRepository.findById(id).get());
    }

    public List<MagazineDTO> getBrandMagazines(Long lgId) {
        List<MagazineDTO> magazineDTO = magazineRepository.findAllByLgId(lgId).stream().map(m -> modelMapper.map(m, MagazineDTO.class)).collect(Collectors.toList());
        return magazineDTO;
    }

    @Transactional
    public Long addMagazine(Magazine magazine){
        magazineRepository.save(magazine);
        return magazine.getId();
    }

    public Long deleteMagazine(Long id) {
        magazineRepository.deleteById(id);
        return id;
    }

}
