package br.pucminas.sistema_moedas_api.Service;

import br.pucminas.sistema_moedas_api.DTO.*;
import br.pucminas.sistema_moedas_api.Model.Advantage;
import br.pucminas.sistema_moedas_api.Model.Student;
import br.pucminas.sistema_moedas_api.Model.Transaction;
import br.pucminas.sistema_moedas_api.Repository.AdvantageRepository;
import br.pucminas.sistema_moedas_api.Repository.StudentRepository;
import br.pucminas.sistema_moedas_api.Repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TransactionService {
  private final AdvantageRepository advantageRepository;
  private final StudentRepository studentRepository;
  private final TransactionRepository transactionRepository;

  @Autowired
  public TransactionService(
      TransactionRepository transactionRepository,
      AdvantageRepository advantageRepository,
      StudentRepository studentRepository) {
    this.advantageRepository = advantageRepository;
    this.studentRepository = studentRepository;
    this.transactionRepository = transactionRepository;
  }

  public Transaction create(TransactionCreateDTO transaction) {
    Advantage advantage = advantageRepository.findById(transaction.advantageId())
        .orElseThrow(() -> new RuntimeException("Vantagem não encontrada"));

    Student student = studentRepository.findById(transaction.studentId())
        .orElseThrow(() -> new RuntimeException("Aluno(a) não encontrado(a)"));

    Transaction response = new Transaction();
    response.setAdvantage(advantage);
    response.setStudent(student);
    response.setDateTime(LocalDateTime.now());

    return response;
  }

  public List<TransactionDTO> getAll() {
    return transactionRepository.findAll().stream().map(this::convertToDTO).collect(Collectors.toList());
  }

  private TransactionDTO convertToDTO(Transaction transaction) {
    StudentDTO student = new StudentDTO(transaction.getStudent().getId(), transaction.getStudent().getName());
    AdvantageGetDTO advantage = new AdvantageGetDTO(
        transaction.getAdvantage().getId(),
        transaction.getAdvantage().getName(),
        transaction.getAdvantage().getDescription(),
        transaction.getAdvantage().getCost(),
        new AdvantageGetCompanyDTO(transaction.getAdvantage().getId(), transaction.getAdvantage().getName())
    );

    return new TransactionDTO(
        transaction.getId(),
        student,
        advantage,
        transaction.getDateTime()
    );
  }

}