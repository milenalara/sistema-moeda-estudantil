package br.pucminas.sistema_moedas_api.Repository;

import br.pucminas.sistema_moedas_api.DTO.TransactionDTO;
import br.pucminas.sistema_moedas_api.Model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {

  @Query(value = "SELECT * FROM transaction WHERE student_id = :id", nativeQuery = true)
  List<Transaction> findByStudent_Id(Long id);
}
