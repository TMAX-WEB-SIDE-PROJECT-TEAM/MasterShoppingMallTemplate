package shop.spring_project.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import shop.spring_project.Entity.Magazine;

import java.util.List;
import java.util.Optional;
@Repository
public interface MagazineRepository extends JpaRepository<Magazine, Long> {
    List<Magazine> findAllByLgId(Long lgId);
}
