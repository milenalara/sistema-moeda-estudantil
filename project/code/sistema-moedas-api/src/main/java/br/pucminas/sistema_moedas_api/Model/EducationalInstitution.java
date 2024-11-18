package br.pucminas.sistema_moedas_api.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

  @JsonIgnore
  @OneToMany(mappedBy = "educationalInstitution")
  List<Student> students;
}
