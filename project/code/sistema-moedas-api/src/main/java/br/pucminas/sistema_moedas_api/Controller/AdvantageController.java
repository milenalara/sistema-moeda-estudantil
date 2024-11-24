package br.pucminas.sistema_moedas_api.Controller;

import br.pucminas.sistema_moedas_api.DTO.AdvantageCreateDTO;
import br.pucminas.sistema_moedas_api.DTO.AdvantageGetDTO;
import br.pucminas.sistema_moedas_api.DTO.TransactionCreateDTO;
import br.pucminas.sistema_moedas_api.DTO.TransactionDTO;
import br.pucminas.sistema_moedas_api.Service.AdvantageService;
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
@RequestMapping("/api/advantage")
public class AdvantageController {
  @Autowired
  private AdvantageService advantageService;

  @GetMapping
  public ResponseEntity<List<AdvantageGetDTO>> findAll() {
    List<AdvantageGetDTO> advantages = advantageService.findAll();
    return ResponseEntity.ok().body(advantages);
  }

  @GetMapping("/{id}")
  public ResponseEntity<AdvantageGetDTO> findById(@PathVariable Long id) {
    AdvantageGetDTO advantage = advantageService.findById(id);
    return ResponseEntity.ok().body(advantage);
  }

  @GetMapping("/company/{companyId}")
  public ResponseEntity<List<AdvantageGetDTO>> findByCompanyId(@PathVariable Long companyId) {
    List<AdvantageGetDTO> advantage = advantageService.findByCompanyId(companyId);
    return ResponseEntity.ok().body(advantage);
  }

  @PostMapping
  public ResponseEntity<Void> create(@RequestBody AdvantageCreateDTO advantage) {
    advantageService.create(advantage);
    return ResponseEntity.noContent().build();
  }

  @DeleteMapping("/delete/{id}")
  public ResponseEntity<AdvantageGetDTO> deleteAdvantage(@PathVariable("id") long id) {
    AdvantageGetDTO advantage = advantageService.deleteById(id);
    return ResponseEntity.ok().body(advantage);
  }

  @PutMapping("/update/{id}")
  public ResponseEntity<Void> update(@RequestBody AdvantageCreateDTO advantage, @PathVariable("id") Long id) {
    advantageService.update(advantage, id);
    return ResponseEntity.noContent().build();
  }

  @PostMapping("/exchange")
  public ResponseEntity<Void> exchange(@RequestBody TransactionCreateDTO transactionCreateDTO) {
    advantageService.exchange(transactionCreateDTO);
    return ResponseEntity.noContent().build();
  }

}
