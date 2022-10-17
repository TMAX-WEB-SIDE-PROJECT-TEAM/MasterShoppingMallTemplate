package shop.spring_project.Service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import shop.spring_project.Entity.Magazine;
import shop.spring_project.Repository.MagazineRepository;

import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class MagazineService {

    private final MagazineRepository magazineRepository;

    public MagazineService(MagazineRepository magazineRepository) {this.magazineRepository = magazineRepository;}

    public Optional<Magazine> getMagazine(Long id) {
        return magazineRepository.findById(id);
    }

    public List<Magazine> getBrandMagazines(Long lgId) {
        return magazineRepository.findAllByLgId(lgId);
    }

    @Transactional
    public Long addMagazine(Magazine magazine){
        magazineRepository.save(magazine);
        return magazine.getId();
    }


}
