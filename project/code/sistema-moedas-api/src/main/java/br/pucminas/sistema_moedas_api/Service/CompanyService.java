package br.pucminas.sistema_moedas_api.Service;

import br.pucminas.sistema_moedas_api.DTO.CompanyCreateDTO;
import br.pucminas.sistema_moedas_api.DTO.CompanyGetDTO;
import br.pucminas.sistema_moedas_api.Model.Company;
import br.pucminas.sistema_moedas_api.Repository.CompanyRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CompanyService {
  @Autowired
  private CompanyRepository companyRepository;

  public CompanyGetDTO findById(Long id) {
    Optional<Company> company = companyRepository.findById(id);
    Company foundCompany = company.orElseThrow(() -> new RuntimeException(
        "Usuário não encontrado! Id: " + id + ", Tipo: " + Company.class.getName()));
    return convertToDTO(foundCompany);
  }

  public CompanyGetDTO deleteById(Long id) {
    Optional<Company> company = companyRepository.findById(id);
    Company foundCompany = company.orElseThrow(() -> new RuntimeException(
        "Usuário não encontrado! Id: " + id + ", Tipo: " + Company.class.getName()));
    companyRepository.delete(foundCompany);
    return convertToDTO(foundCompany);
  }

  public List<CompanyGetDTO> findAll() {
    List<Company> companys = companyRepository.findAll();
    return companys.stream().map(this::convertToDTO).collect(Collectors.toList());
  }

  @Transactional
  public Company create(CompanyCreateDTO company) {
    Company newCompany = new Company();

    newCompany.setId(null);
    newCompany.setName(company.name());
    newCompany.setPassword(company.password());

    companyRepository.save(newCompany);
    return newCompany;
  }

  private CompanyGetDTO convertToDTO(Company company) {

    return new CompanyGetDTO(
        company.getId(),
        company.getName(),
        company.getPassword());
  }

}
