package br.pucminas.sistema_moedas_api.Controller;

import br.pucminas.sistema_moedas_api.DTO.CompanyCreateDTO;
import br.pucminas.sistema_moedas_api.DTO.CompanyGetDTO;
import br.pucminas.sistema_moedas_api.Service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api/company")
public class CompanyController {
  @Autowired
  private CompanyService companyService;

  @GetMapping
  public ResponseEntity<List<CompanyGetDTO>> findAll() {
    List<CompanyGetDTO> companies = companyService.findAll();
    return ResponseEntity.ok().body(companies);
  }

  @GetMapping("/{id}")
  public ResponseEntity<CompanyGetDTO> findById(@PathVariable Long id) {
    CompanyGetDTO company = companyService.findById(id);
    return ResponseEntity.ok().body(company);
  }

  @PostMapping
  public ResponseEntity<Void> create(@RequestBody CompanyCreateDTO company) {
    companyService.create(company);
    return ResponseEntity.noContent().build();
  }

  @DeleteMapping("/delete/{id}")
  public ResponseEntity<CompanyGetDTO> deleteCompany(@PathVariable("id") long id) {
      CompanyGetDTO company = companyService.deleteById(id);
      return ResponseEntity.ok().body(company);
  }
  
  @PutMapping("/update/{id}")
  public ResponseEntity<Void> update(@RequestBody CompanyCreateDTO company, @PathVariable("id") Long id) {
      companyService.update(company, id);
      return ResponseEntity.noContent().build();
}

}
