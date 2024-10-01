package br.pucminas.sistema_moedas_api.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "educational_institution")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EducationalInstitution {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  Long id;
  String cnpj; // Cadastro Nacional de Pessoas Juridicas = National Registry of Legal Entities
  String name;

  @OneToMany(mappedBy = "educationalInstitution")
  List<Department> departments;

  @OneToMany(mappedBy = "educationalInstitution")
  List<Student> students;
}
