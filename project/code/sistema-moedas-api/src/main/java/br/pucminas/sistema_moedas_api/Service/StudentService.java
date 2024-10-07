package br.pucminas.sistema_moedas_api.Service;

import br.pucminas.sistema_moedas_api.DTO.StudentCourseDTO;
import br.pucminas.sistema_moedas_api.DTO.StudentEducationalInstitutionDTO;
import br.pucminas.sistema_moedas_api.DTO.StudentGetDTO;
import br.pucminas.sistema_moedas_api.Model.Student;
import br.pucminas.sistema_moedas_api.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class StudentService {
  @Autowired
  private StudentRepository studentRepository;

  public StudentGetDTO findById(Long id) {
    Optional<Student> student = studentRepository.findById(id);
    Student foundStudent = student.orElseThrow(() -> new RuntimeException(
        "Usuário não encontrado! Id: " + id + ", Tipo: " + Student.class.getName()));
    return convertToDTO(foundStudent);
  }

  public List<StudentGetDTO> findAll() {
    List<Student> students = studentRepository.findAll();
    return students.stream().map(this::convertToDTO).collect(Collectors.toList());
  }

  public Student create(Student student) {
    studentRepository.save(student);
    return student;
  }

  private StudentGetDTO convertToDTO(Student student) {
    StudentCourseDTO course = new StudentCourseDTO(student.getCourse().getName());
    StudentEducationalInstitutionDTO educationalInstitution = new StudentEducationalInstitutionDTO(student.getEducationalInstitution().getName());

    return new StudentGetDTO(
        student.getName(),
        student.getEmail(),
        student.getCPF(),
        student.getRG(),
        educationalInstitution,
        course
    );
  }

}
