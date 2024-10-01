package br.pucminas.sistema_moedas_api.Repository;

import br.pucminas.sistema_moedas_api.Model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
}
