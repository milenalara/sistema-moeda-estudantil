package br.pucminas.sistema_moedas_api.Service;

import br.pucminas.sistema_moedas_api.DTO.AdvantageGetDTO;
import br.pucminas.sistema_moedas_api.DTO.AdvantageCreateDTO;
import br.pucminas.sistema_moedas_api.DTO.AdvantageGetCompanyDTO;
import br.pucminas.sistema_moedas_api.Model.Advantage;
import br.pucminas.sistema_moedas_api.Model.Company;
import br.pucminas.sistema_moedas_api.Repository.AdvantageRepository;
import br.pucminas.sistema_moedas_api.Repository.CompanyRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AdvantageService {
  @Autowired
  private AdvantageRepository advantageRepository;
  @Autowired
  private CompanyRepository companyRepository;

  public AdvantageGetDTO findById(Long id) {
    Optional<Advantage> advantage = advantageRepository.findById(id);
    Advantage foundAdvantage = advantage.orElseThrow(() -> new RuntimeException(
        "Vantagem não encontrada! Id: " + id + ", Tipo: " + Advantage.class.getName()));
    return convertToDTO(foundAdvantage);
  }

  public List<AdvantageGetDTO> findAll() {
    List<Advantage> advantages = advantageRepository.findAll();
    return advantages.stream().map(this::convertToDTO).collect(Collectors.toList());
  }

  @Transactional
  public Advantage create(AdvantageCreateDTO advantage) {
    Advantage newAdvantage = new Advantage();

    Company company = companyRepository
        .findById(advantage.companyId()).orElseThrow(() -> new RuntimeException("Company not found"));

    newAdvantage.setId(null);
    newAdvantage.setName(advantage.name());
    newAdvantage.setCost(advantage.cost());
    newAdvantage.setDescription(advantage.description());
    newAdvantage.setCompany(company);

    advantageRepository.save(newAdvantage);
    return newAdvantage;
  }

  @Transactional
  public Advantage update(AdvantageCreateDTO advantageDTO, Long id) {
    Advantage advantage = advantageRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("Vantagem não encontrado"));

    Company company = companyRepository
        .findById(advantageDTO.companyId()).orElseThrow(() -> new RuntimeException("Company not found"));

    advantage.setName(advantageDTO.name());
    advantage.setDescription(advantageDTO.description());
    advantage.setCost(advantageDTO.cost());
    advantage.setCompany(company);

    return advantageRepository.save(advantage);
  }

  private AdvantageGetDTO convertToDTO(Advantage advantage) {
    AdvantageGetCompanyDTO company = new AdvantageGetCompanyDTO(advantage.getId(), advantage.getCompany().getName());

    return new AdvantageGetDTO(
        advantage.getId(),
        advantage.getName(),
        advantage.getDescription(),
        advantage.getCost(),
        company);
  }

  public AdvantageGetDTO deleteById(Long id) {
    Optional<Advantage> advantage = advantageRepository.findById(id);
    Advantage foundAdvantage = advantage.orElseThrow(() -> new RuntimeException(
        "Vantagem não encontrada! Id: " + id + ", Tipo: " + Advantage.class.getName()));
    advantageRepository.delete(foundAdvantage);
    return convertToDTO(foundAdvantage);
  }

}
