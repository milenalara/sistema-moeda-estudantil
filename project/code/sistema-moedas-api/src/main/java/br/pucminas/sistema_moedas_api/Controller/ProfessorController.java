package br.pucminas.sistema_moedas_api.Controller;

import br.pucminas.sistema_moedas_api.DTO.ProfessorCreateDTO;
import br.pucminas.sistema_moedas_api.DTO.ProfessorGetDTO;
import br.pucminas.sistema_moedas_api.Service.ProfessorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api/professor")
public class ProfessorController {
  @Autowired
  private ProfessorService professorService;

  @GetMapping
  public ResponseEntity<List<ProfessorGetDTO>> findAll() {
    List<ProfessorGetDTO> companies = professorService.findAll();
    return ResponseEntity.ok().body(companies);
  }

  @GetMapping("/{id}")
  public ResponseEntity<ProfessorGetDTO> findById(@PathVariable Long id) {
    ProfessorGetDTO professor = professorService.findById(id);
    return ResponseEntity.ok().body(professor);
  }

  @PostMapping
  public ResponseEntity<Void> create(@RequestBody ProfessorCreateDTO professor) {
    professorService.create(professor);
    return ResponseEntity.noContent().build();
  }

  @DeleteMapping("/delete/{id}")
  public ResponseEntity<ProfessorGetDTO> deleteProfessor(@PathVariable("id") long id) {
      ProfessorGetDTO professor = professorService.deleteById(id);
      return ResponseEntity.ok().body(professor);
  }
}
