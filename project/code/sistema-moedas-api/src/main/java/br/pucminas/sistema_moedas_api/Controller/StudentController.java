package br.pucminas.sistema_moedas_api.Controller;

import br.pucminas.sistema_moedas_api.DTO.*;
import br.pucminas.sistema_moedas_api.Model.Student;
import br.pucminas.sistema_moedas_api.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/student")
public class StudentController {
  @Autowired
  private StudentService studentService;


  @PostMapping("/login")
  public ResponseEntity<LoginResponseDTO> login(@RequestBody LoginRequestDTO request) {
    LoginResponseDTO response = studentService.login(request);
    return ResponseEntity.ok(response);
  }

  @GetMapping
  public ResponseEntity<List<StudentGetDTO>> findAll() {
    List<StudentGetDTO> students = studentService.findAll();
    return ResponseEntity.ok().body(students);
  }

  @GetMapping("/{id}")
  public ResponseEntity<StudentGetDTO> findById(@PathVariable Long id) {
    StudentGetDTO student = studentService.findById(id);
    return ResponseEntity.ok().body(student);
  }

  @PostMapping
  public ResponseEntity<Void> create(@RequestBody StudentCreateDTO student) {
    studentService.create(student);
    return ResponseEntity.noContent().build();
  }

  @DeleteMapping("/delete/{id}")
  public ResponseEntity<StudentGetDTO> deleteStudent(@PathVariable("id") long id) {
      StudentGetDTO student = studentService.deleteById(id);
      return ResponseEntity.ok().body(student);
  }

  @PutMapping("/update/{id}")
  public ResponseEntity<Void> update(@RequestBody StudentUpdateDTO student, @PathVariable("id") Long id) {
    studentService.update(student, id);
    return ResponseEntity.noContent().build();
  }

  @PatchMapping("/update/{id}")
  public ResponseEntity<Void> updateBalance(@RequestBody Student student, @PathVariable("id") Long id) {
    studentService.updateBalance(student, id);
    return ResponseEntity.noContent().build();
  }
}
