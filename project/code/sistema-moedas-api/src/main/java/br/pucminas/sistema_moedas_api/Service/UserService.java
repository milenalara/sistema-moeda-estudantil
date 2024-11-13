package br.pucminas.sistema_moedas_api.Service;

import br.pucminas.sistema_moedas_api.DTO.LoginRequestDTO;
import br.pucminas.sistema_moedas_api.DTO.LoginResponseDTO;
import br.pucminas.sistema_moedas_api.Exception.IncorrectPasswordException;
import br.pucminas.sistema_moedas_api.Exception.UserNotFoundException;
import br.pucminas.sistema_moedas_api.Model.Admin;
import br.pucminas.sistema_moedas_api.Model.Company;
import br.pucminas.sistema_moedas_api.Model.Professor;
import br.pucminas.sistema_moedas_api.Model.Student;
import br.pucminas.sistema_moedas_api.Repository.AdminRepository;
import br.pucminas.sistema_moedas_api.Repository.CompanyRepository;
import br.pucminas.sistema_moedas_api.Repository.ProfessorRepository;
import br.pucminas.sistema_moedas_api.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  @Autowired
  AdminRepository adminRepository;
  @Autowired
  ProfessorRepository professorRepository;
  @Autowired
  StudentRepository studentRepository;
  @Autowired
  private CompanyRepository companyRepository;

  public LoginResponseDTO login(LoginRequestDTO requestDTO) {
    if(adminRepository.existsByEmail(requestDTO.email())) {
      Admin admin = adminRepository.findByEmail(requestDTO.email())
          .orElseThrow(()-> new UserNotFoundException("Não existe admin com o email informado"));

      if(!admin.getPassword().equals(requestDTO.password())) {
        throw new IncorrectPasswordException("Senha incorreta");
      }

      return new LoginResponseDTO(
          admin.getId(),
          admin.getClass().getSimpleName()
      );
    }

    if(professorRepository.existsByEmail(requestDTO.email())) {
      Professor professor = professorRepository.findByEmail(requestDTO.email())
          .orElseThrow(()-> new UserNotFoundException("Não existe professor com o email informado"));

      if(!professor.getPassword().equals(requestDTO.password())) {
        throw new IncorrectPasswordException("Senha incorreta");
      }

      return new LoginResponseDTO(
          professor.getId(),
          professor.getClass().getSimpleName()
      );
    }

    if(studentRepository.existsByEmail(requestDTO.email())) {
      Student student = studentRepository.findByEmail(requestDTO.email())
          .orElseThrow(()-> new UserNotFoundException("Não existe aluno com o email informado"));

      if(!student.getPassword().equals(requestDTO.password())) {
        throw new IncorrectPasswordException("Senha incorreta");
      }

      return new LoginResponseDTO(
          student.getId(),
          student.getClass().getSimpleName()
      );
    }

    if(companyRepository.existsByEmail(requestDTO.email())) {
      Company company = companyRepository.findByEmail(requestDTO.email())
          .orElseThrow(()-> new UserNotFoundException("Não existe aluno com o email informado"));

      if(!company.getPassword().equals(requestDTO.password())) {
        throw new IncorrectPasswordException("Senha incorreta");
      }

      return new LoginResponseDTO(
          company.getId(),
          company.getClass().getSimpleName()
      );
    }

    throw new UserNotFoundException("Usuario inexistente");
  }
}
