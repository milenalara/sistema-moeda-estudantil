package br.pucminas.sistema_moedas_api.Repository;

import br.pucminas.sistema_moedas_api.Model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
}
