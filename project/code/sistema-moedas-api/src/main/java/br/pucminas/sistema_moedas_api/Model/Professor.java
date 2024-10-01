package br.pucminas.sistema_moedas_api.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "professor")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Professor {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  Long id;
  String name;
  String CPF; // Cadastro de Pessoa Fisica = Natural Persons Register

  @ManyToOne
  @JoinColumn(name = "department_id", nullable = false)
  Department department; // Departamento

  @ManyToOne
  @JoinColumn(name = "account_id", nullable = false)
  Account account;
}
