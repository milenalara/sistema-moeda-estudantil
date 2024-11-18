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

  public List<TransactionDTO> getAll() {
    return transactionRepository.findAll().stream().map(this::convertToDTO).collect(Collectors.toList());
  }

  public List<TransactionDTO> getByStudentId(Long studentId) {
    return transactionRepository.findByStudent_Id(studentId).stream().map(this::convertToDTO).collect(Collectors.toList());
  }

  private TransactionDTO convertToDTO(Transaction transaction) {
    return new TransactionDTO(
        transaction.getId(),
        transaction.getStudent().getId(),
        transaction.getAdvantage().getId(),
        transaction.getAdvantage().getCost(),
        transaction.getBalance(),
        transaction.getDateTime()
    );
  }

}