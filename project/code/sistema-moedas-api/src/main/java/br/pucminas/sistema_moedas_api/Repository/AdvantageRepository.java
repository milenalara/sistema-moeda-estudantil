package br.pucminas.sistema_moedas_api.Repository;

import br.pucminas.sistema_moedas_api.Model.Advantage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdvantageRepository extends JpaRepository<Advantage, Long> {
}
