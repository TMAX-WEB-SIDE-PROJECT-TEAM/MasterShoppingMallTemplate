package shop.spring_project.Service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import shop.spring_project.DTO.MagazineDTO;
import shop.spring_project.Entity.Magazine;
import shop.spring_project.Mapper.MagazineMapper;
import shop.spring_project.Repository.MagazineRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class MagazineService {

    private final MagazineRepository magazineRepository;
    private final MagazineMapper modelMapper = new MagazineMapper();
    public MagazineService(MagazineRepository magazineRepository) {this.magazineRepository = magazineRepository;}

    public MagazineDTO findMagazine(Long id) {
        return modelMapper.convertEntityToDto(magazineRepository.findById(id).get());
    }

    public List<MagazineDTO> findBrandMagazines(Long lgId) {
        List<MagazineDTO> magazineDTO = magazineRepository.findAllByLgId(lgId).stream().map(m -> modelMapper.map(m, MagazineDTO.class)).collect(Collectors.toList());
        return magazineDTO;
    }

    public List<MagazineDTO> findAllMagazines() {
        return magazineRepository.findAll().stream().map(m -> modelMapper.map(m, MagazineDTO.class)).collect(Collectors.toList());
    }

    @Transactional
    public Long addMagazine(Magazine magazine){
        magazineRepository.save(magazine);
        return magazine.getId();
    }

    @Transactional
    public Long deleteMagazine(Long id) {
        magazineRepository.deleteById(id);
        return id;
    }

    @Transactional
    public Long editMagazine(Magazine magazine) {
        Optional<Magazine> oldMagazine = magazineRepository.findById(magazine.getId());
        oldMagazine.get().setLgId(magazine.getLgId());
        oldMagazine.get().setMdId(magazine.getMdId());
        oldMagazine.get().setSmId(magazine.getSmId());
        oldMagazine.get().setContent(magazine.getContent());

        return magazine.getId();
    }

}
