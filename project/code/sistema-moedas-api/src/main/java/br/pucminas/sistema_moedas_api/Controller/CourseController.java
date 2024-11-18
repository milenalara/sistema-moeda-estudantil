package br.pucminas.sistema_moedas_api.Controller;

import br.pucminas.sistema_moedas_api.Model.Course;
import br.pucminas.sistema_moedas_api.Repository.CourseRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/course")
public class CourseController {
  public final CourseRepository courseRepository;

  private CourseController(CourseRepository courseRepository) {
    this.courseRepository = courseRepository;
  }

  @GetMapping
  public ResponseEntity<List<Course>> getAll() {
    List<Course> courses = courseRepository.findAll();
    return ResponseEntity.ok(courses);
  }
}
