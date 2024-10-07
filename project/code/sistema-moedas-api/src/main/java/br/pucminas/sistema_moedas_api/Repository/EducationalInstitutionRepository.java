package br.pucminas.sistema_moedas_api.Repository;

import br.pucminas.sistema_moedas_api.Model.EducationalInstitution;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EducationalInstitutionRepository extends JpaRepository<EducationalInstitution, Long> {
}
