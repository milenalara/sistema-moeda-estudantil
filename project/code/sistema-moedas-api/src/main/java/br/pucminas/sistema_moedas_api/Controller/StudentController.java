package br.pucminas.sistema_moedas_api.Controller;

import br.pucminas.sistema_moedas_api.Model.Student;
import br.pucminas.sistema_moedas_api.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/student")
public class StudentController {
  @Autowired
  private StudentService studentService;

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
}
