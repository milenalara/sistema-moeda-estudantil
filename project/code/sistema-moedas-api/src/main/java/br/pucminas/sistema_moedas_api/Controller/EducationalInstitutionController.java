package br.pucminas.sistema_moedas_api.Controller;

import br.pucminas.sistema_moedas_api.Model.EducationalInstitution;
import br.pucminas.sistema_moedas_api.Repository.EducationalInstitutionRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/educationalinstitution")
public class EducationalInstitutionController {
  private final EducationalInstitutionRepository educationalInstitutionRepository;

  private EducationalInstitutionController(EducationalInstitutionRepository educationalInstitutionRepository) {
    this.educationalInstitutionRepository = educationalInstitutionRepository;
  }

  @GetMapping
  public ResponseEntity<List<EducationalInstitution>> getAll() {
    List<EducationalInstitution> educationalInstitutions = educationalInstitutionRepository.findAll();
    return ResponseEntity.ok(educationalInstitutions);
  }
}
