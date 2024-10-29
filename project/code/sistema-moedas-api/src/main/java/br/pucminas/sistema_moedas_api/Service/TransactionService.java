package br.pucminas.sistema_moedas_api.Service;

import br.pucminas.sistema_moedas_api.DTO.TransactionCreateDTO;
import br.pucminas.sistema_moedas_api.DTO.TransactionGetDTO;
import br.pucminas.sistema_moedas_api.Model.Student;
import br.pucminas.sistema_moedas_api.Model.Transaction;
import br.pucminas.sistema_moedas_api.Repository.StudentRepository;
import br.pucminas.sistema_moedas_api.Repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private StudentRepository studentRepository;

    public List<TransactionGetDTO> findByStudentId(Long studentId) {
        List<Transaction> transactions = transactionRepository.findByStudentId(studentId);
        return transactions.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Transactional
    public void create(TransactionCreateDTO transactionCreateDTO) {
        Student student = studentRepository.findById(transactionCreateDTO.studentId())
            .orElseThrow(() -> new RuntimeException("Student not found"));

        Transaction transaction = new Transaction();
        transaction.setStudent(student);
        transaction.setAmount(transactionCreateDTO.amount());
        transaction.setDate(new Date());
        transaction.setDescription(transactionCreateDTO.description());

        transactionRepository.save(transaction);
    }

    private TransactionGetDTO convertToDTO(Transaction transaction) {
        return new TransactionGetDTO(
            transaction.getId(),
            transaction.getDate(),
            transaction.getAmount(),
            transaction.getDescription()
        );
    }
}
