package br.pucminas.sistema_moedas_api.Controller;

import br.pucminas.sistema_moedas_api.DTO.PaymentCreateDTO;
import br.pucminas.sistema_moedas_api.DTO.PaymentGetDTO;
import br.pucminas.sistema_moedas_api.Service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {
  @Autowired
  private PaymentService paymentService;

  @GetMapping
  public ResponseEntity<List<PaymentGetDTO>> findAll() {
    List<PaymentGetDTO> payments = paymentService.findAll();
    return ResponseEntity.ok().body(payments);
  }

  @PostMapping
  public ResponseEntity<Void> create(@RequestBody PaymentCreateDTO payment) {
    paymentService.create(payment);
    return ResponseEntity.noContent().build();
  }


}
