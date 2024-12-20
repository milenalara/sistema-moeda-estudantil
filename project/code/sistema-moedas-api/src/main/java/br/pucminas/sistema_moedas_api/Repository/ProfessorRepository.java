package br.pucminas.sistema_moedas_api.Repository;

import br.pucminas.sistema_moedas_api.Model.Professor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProfessorRepository extends JpaRepository<Professor, Long> {
  Optional<Professor> findByEmail(String email);

  boolean existsByEmail(String email);
}
