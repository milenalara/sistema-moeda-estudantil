package br.pucminas.sistema_moedas_api.Service;

import br.pucminas.sistema_moedas_api.Model.Student;
import br.pucminas.sistema_moedas_api.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
  @Autowired
  private StudentRepository studentRepository;

  public Student findById(Long id) {
    Optional<Student> student = studentRepository.findById(id);
    return student.orElseThrow(() -> new RuntimeException(
        "Usuário não encontrado! Id: " + id + ", Tipo: " + Student.class.getName()));
  }

  public List<Student> findAll() {
    return studentRepository.findAll();
  }

}
