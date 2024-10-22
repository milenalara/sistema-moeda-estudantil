package br.pucminas.sistema_moedas_api.Service;

import br.pucminas.sistema_moedas_api.DTO.ProfessorCreateDTO;
import br.pucminas.sistema_moedas_api.DTO.ProfessorGetDTO;
import br.pucminas.sistema_moedas_api.DTO.ProfessorGetDepartmentDTO;
import br.pucminas.sistema_moedas_api.Model.Department;
import br.pucminas.sistema_moedas_api.Model.Department;
import br.pucminas.sistema_moedas_api.Model.Professor;
import br.pucminas.sistema_moedas_api.Repository.ProfessorRepository;
import br.pucminas.sistema_moedas_api.Repository.CourseRepository;
import br.pucminas.sistema_moedas_api.Repository.DepartmentRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProfessorService {
  @Autowired
  private ProfessorRepository professorRepository;

  @Autowired
  private DepartmentRepository departmentRepository;

  public ProfessorGetDTO findById(Long id) {
    Optional<Professor> professor = professorRepository.findById(id);
    Professor foundProfessor = professor.orElseThrow(() -> new RuntimeException(
        "Usuário não encontrado! Id: " + id + ", Tipo: " + Professor.class.getName()));
    return convertToDTO(foundProfessor);
  }

  public ProfessorGetDTO deleteById(Long id) {
    Optional<Professor> professor = professorRepository.findById(id);
    Professor foundProfessor = professor.orElseThrow(() -> new RuntimeException(
        "Usuário não encontrado! Id: " + id + ", Tipo: " + Professor.class.getName()));
    professorRepository.delete(foundProfessor);
    return convertToDTO(foundProfessor);
  }

  public List<ProfessorGetDTO> findAll() {
    List<Professor> professors = professorRepository.findAll();
    return professors.stream().map(this::convertToDTO).collect(Collectors.toList());
  }

  @Transactional
  public Professor create(ProfessorCreateDTO professor) {
    Professor newProfessor = new Professor();

    Department department = departmentRepository
        .findById(professor.departmentId()).orElseThrow(() -> new RuntimeException("Department not found"));

    newProfessor.setId(null);
    newProfessor.setName(professor.name());
    newProfessor.setPassword(professor.password());
    newProfessor.setDepartment(department);

    professorRepository.save(newProfessor);
    return newProfessor;
  }

  private ProfessorGetDTO convertToDTO(Professor professor) {
    ProfessorGetDepartmentDTO department = new ProfessorGetDepartmentDTO(professor.getId(), professor.getDepartment().getName());

    return new ProfessorGetDTO(
        professor.getId(),
        professor.getName(),
        professor.getPassword(),
        professor.getBalance(),
        department);
  }

}
