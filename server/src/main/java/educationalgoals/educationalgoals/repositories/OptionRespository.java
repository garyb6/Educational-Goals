package educationalgoals.educationalgoals.repositories;

import educationalgoals.educationalgoals.models.Option;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OptionRespository extends JpaRepository<Option, Long> {
}
