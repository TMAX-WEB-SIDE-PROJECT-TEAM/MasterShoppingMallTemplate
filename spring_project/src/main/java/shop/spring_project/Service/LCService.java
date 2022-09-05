package shop.spring_project.Service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import shop.spring_project.Entity.LargeCategory;
import shop.spring_project.Repository.LCRepository;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class LCService {

    private final LCRepository lcRepository;

    public LCService(LCRepository lcRepository) {
        this.lcRepository = lcRepository;
    }

    @Transactional
    public Long addBrand(LargeCategory largeCategory){
        lcRepository.save(largeCategory);
        return largeCategory.getId();
    }

    public List<LargeCategory> getBrands(){
        return lcRepository.findAll();
    }
}
