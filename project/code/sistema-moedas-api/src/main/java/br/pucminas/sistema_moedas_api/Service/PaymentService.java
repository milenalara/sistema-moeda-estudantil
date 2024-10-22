package br.pucminas.sistema_moedas_api.Service;

import br.pucminas.sistema_moedas_api.DTO.PaymentCreateDTO;
import br.pucminas.sistema_moedas_api.DTO.PaymentGetDTO;
import br.pucminas.sistema_moedas_api.DTO.PaymentGetStudentDTO;
import br.pucminas.sistema_moedas_api.DTO.PaymentGetProfessorDTO;
import br.pucminas.sistema_moedas_api.Model.Professor;
import br.pucminas.sistema_moedas_api.Model.Payment;
import br.pucminas.sistema_moedas_api.Model.Student;
import br.pucminas.sistema_moedas_api.Repository.PaymentRepository;
import br.pucminas.sistema_moedas_api.Repository.ProfessorRepository;
import br.pucminas.sistema_moedas_api.Repository.StudentRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PaymentService {
  @Autowired
  private PaymentRepository paymentRepository;
  @Autowired
  private ProfessorRepository professorRepository;
  @Autowired
  private StudentRepository studentRepository;

  public PaymentGetDTO findById(Long id) {
    Optional<Payment> payment = paymentRepository.findById(id);
    Payment foundPayment = payment.orElseThrow(() -> new RuntimeException(
        "Pagamento não encontrado! Id: " + id + ", Tipo: " + Payment.class.getName()));
    return convertToDTO(foundPayment);
  }

  public List<PaymentGetDTO> findAll() {
    List<Payment> payments = paymentRepository.findAll();
    return payments.stream().map(this::convertToDTO).collect(Collectors.toList());
  }

  @Transactional
  public Payment create(PaymentCreateDTO payment) {
    Payment newPayment = new Payment();

    Professor professor = professorRepository
        .findById(payment.professorId()).orElseThrow(() -> new RuntimeException("Professor not found"));

        Student student = studentRepository
        .findById(payment.studentId()).orElseThrow(() -> new RuntimeException("Student not found"));

    newPayment.setId(null);
    newPayment.setCost(payment.cost());
    newPayment.setDate(payment.date());
    newPayment.setProfessor(professor);
    newPayment.setStudent(student);

    paymentRepository.save(newPayment);
    return newPayment;
  }

  private PaymentGetDTO convertToDTO(Payment payment) {
    PaymentGetStudentDTO student = new PaymentGetStudentDTO(payment.getId(), payment.getStudent().getName());
    PaymentGetProfessorDTO professor = new PaymentGetProfessorDTO(payment.getId(), payment.getProfessor().getName());

    return new PaymentGetDTO(
        payment.getId(),
        payment.getDate(),
        payment.getCost(),
        professor,
        student);
  }

}
