package br.pucminas.sistema_moedas_api.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "student")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Student {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(unique = true)
  Long id;

  @Column(nullable = false, length = 100)
  @NotBlank
  @Size(min = 3, max = 100)
  String name;

  @Column(nullable = false, length = 100)
  @Email
  @NotBlank
  String email;

  @Column(name = "cpf", nullable = false, length = 11)
  @NotBlank
  String CPF; // Cadastro de Pessoa Fisica = Natural Persons Register

  @Column(name = "rg", nullable = false, length = 9)
  @NotBlank
  String RG; // Numero do Registro Geral = Brazilian National Identity Card Number

  @ManyToOne
  @JoinColumn(name = "educationalInstitution_id", nullable = false)
  EducationalInstitution educationalInstitution; // Instituicao de Ensino

  @ManyToOne
  @JoinColumn(name = "course_id", nullable = false)
  Course course; // Curso
}
