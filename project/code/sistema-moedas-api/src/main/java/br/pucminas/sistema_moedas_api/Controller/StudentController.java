package br.pucminas.sistema_moedas_api.Controller;

import br.pucminas.sistema_moedas_api.Model.Student;
import br.pucminas.sistema_moedas_api.Repository.StudentRepository;
import br.pucminas.sistema_moedas_api.Service.StudentService;
import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.ui.Model;

import java.util.List;

@RestController
@RequestMapping("/api/student")
public class StudentController {
  @Autowired
  private StudentService studentService;
  @Autowired
  private StudentRepository studentRepository;

  @GetMapping
  public ResponseEntity<List<Student>> findAll() {
    List<Student> students = studentService.findAll();
    return ResponseEntity.ok().body(students);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Student> findById(@PathVariable Long id) {
    Student student = studentService.findById(id);
    return ResponseEntity.ok().body(student);
  }

  @PostMapping
  public String adicionarStudent(@RequestBody Student student, BindingResult result) {

    if (result.hasErrors()) {
      return "criarStudent";
    }

    studentRepository.save(student);
    return "redirect:/createStudent";
  }
}
