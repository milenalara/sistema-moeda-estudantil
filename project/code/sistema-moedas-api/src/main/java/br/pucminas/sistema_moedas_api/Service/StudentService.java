package br.pucminas.sistema_moedas_api.Service;

import br.pucminas.sistema_moedas_api.DTO.*;
import br.pucminas.sistema_moedas_api.Model.Course;
import br.pucminas.sistema_moedas_api.Model.EducationalInstitution;
import br.pucminas.sistema_moedas_api.Model.Student;
import br.pucminas.sistema_moedas_api.Repository.CourseRepository;
import br.pucminas.sistema_moedas_api.Repository.EducationalInstitutionRepository;
import br.pucminas.sistema_moedas_api.Repository.StudentRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class StudentService {
  @Autowired
  private StudentRepository studentRepository;

  @Autowired
  private CourseRepository courseRepository;

  @Autowired
  private EducationalInstitutionRepository educationalInstitutionRepository;

  public StudentGetDTO findById(Long id) {
    Optional<Student> student = studentRepository.findById(id);
    Student foundStudent = student.orElseThrow(() -> new RuntimeException(
        "Usuário não encontrado! Id: " + id + ", Tipo: " + Student.class.getName()));
    return convertToDTO(foundStudent);
  }

  public StudentGetDTO deleteById(Long id) {
    Optional<Student> student = studentRepository.findById(id);
    Student foundStudent = student.orElseThrow(() -> new RuntimeException(
        "Usuário não encontrado! Id: " + id + ", Tipo: " + Student.class.getName()));
    studentRepository.delete(foundStudent);
    return convertToDTO(foundStudent);
  }

  public List<StudentGetDTO> findAll() {
    List<Student> students = studentRepository.findAll();
    return students.stream().map(this::convertToDTO).collect(Collectors.toList());
  }

  @Transactional
  public Student create(StudentCreateDTO student) {
    Student newStudent = new Student();

    Course course = courseRepository.findById(student.courseId())
        .orElseThrow(() -> new RuntimeException("Course not found"));
    EducationalInstitution educationalInstitution = educationalInstitutionRepository
        .findById(student.educationalInstitutionId()).orElseThrow(() -> new RuntimeException("Course not found"));

    newStudent.setId(null);
    newStudent.setName(student.name());
    newStudent.setEmail(student.email());
    newStudent.setCPF(student.CPF());
    newStudent.setRG(student.RG());
    newStudent.setBalance(student.balance());
    newStudent.setPassword(student.password());
    newStudent.setCourse(course);
    newStudent.setEducationalInstitution(educationalInstitution);

    studentRepository.save(newStudent);
    return newStudent;
  }

  @Transactional
  public Student update(StudentUpdateDTO studentDTO, Long id) {
    Student student = convertFromDTO(studentDTO, id);
    return studentRepository.save(student);
  }

  private Student convertFromDTO (StudentUpdateDTO studentDTO, Long id) {
    Student student = studentRepository.findById(id)
        .orElseThrow(()-> new RuntimeException("Estudante não encontrado"));


    EducationalInstitution educationalInstitution = educationalInstitutionRepository.findById(
        studentDTO.educationalInstitutionId()).orElseThrow(
        () -> new RuntimeException("Instituição de Ensino não encontrada"));

    Course course = courseRepository.findById(
        studentDTO.courseId()).orElseThrow(
        () -> new RuntimeException("Curso não encontrado"));

    student.setName(studentDTO.name());
    student.setPassword(studentDTO.password());
    student.setEmail(studentDTO.email());
    student.setCPF(studentDTO.CPF());
    student.setRG(studentDTO.RG());
    student.setBalance(studentDTO.balance());

    return student;
  }

  private StudentGetDTO convertToDTO(Student student) {
    StudentCourseDTO course = new StudentCourseDTO(student.getId(), student.getCourse().getName());
    StudentEducationalInstitutionDTO educationalInstitution = new StudentEducationalInstitutionDTO(
        student.getId(), student.getEducationalInstitution().getName());

    return new StudentGetDTO(
        student.getId(),
        student.getName(),
        student.getEmail(),
        student.getCPF(),
        student.getRG(),
        student.getBalance(),
        student.getPassword(),
        educationalInstitution,
        course);
  }
}
