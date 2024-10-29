package br.pucminas.sistema_moedas_api.Controller;

import br.pucminas.sistema_moedas_api.DTO.TransactionCreateDTO;
import br.pucminas.sistema_moedas_api.DTO.TransactionGetDTO;
import br.pucminas.sistema_moedas_api.Service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transaction")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @GetMapping("/{studentId}")
    public ResponseEntity<List<TransactionGetDTO>> getTransactionsByStudentId(@PathVariable Long studentId) {
        List<TransactionGetDTO> transactions = transactionService.findByStudentId(studentId);
        return ResponseEntity.ok(transactions);
    }

    @PostMapping
    public ResponseEntity<Void> createTransaction(@RequestBody TransactionCreateDTO transactionCreateDTO) {
        transactionService.create(transactionCreateDTO);
        return ResponseEntity.noContent().build();
    }
    
}
