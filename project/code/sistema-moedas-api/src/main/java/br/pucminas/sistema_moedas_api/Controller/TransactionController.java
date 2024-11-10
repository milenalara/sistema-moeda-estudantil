package br.pucminas.sistema_moedas_api.Controller;

import br.pucminas.sistema_moedas_api.DTO.TransactionDTO;
import br.pucminas.sistema_moedas_api.Model.Transaction;
import br.pucminas.sistema_moedas_api.Service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/transaction")
public class TransactionController {
  private final TransactionService transactionService;

  @Autowired
  public TransactionController(TransactionService transactionService) {
    this.transactionService = transactionService;
  }

  @GetMapping
  public ResponseEntity<List<TransactionDTO>> getAll() {
    List<TransactionDTO> transactions = transactionService.getAll();
    return ResponseEntity.ok(transactions);
  }

  @GetMapping("/{studentId}")
  public ResponseEntity<List<TransactionDTO>> getByStudent(@PathVariable Long studentId) {
    List<TransactionDTO> transactions = transactionService.getByStudentId(studentId);
    return ResponseEntity.ok(transactions);
  }
}
