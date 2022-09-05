package shop.spring_project.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import shop.spring_project.Entity.LargeCategory;

@Repository
public interface LCRepository extends JpaRepository<LargeCategory, Long> {
}
