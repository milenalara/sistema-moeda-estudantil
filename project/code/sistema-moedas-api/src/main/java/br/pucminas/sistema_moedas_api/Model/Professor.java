package br.pucminas.sistema_moedas_api.Model;

import java.util.List;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
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
public class Professor extends User {
  @Column(nullable = false, length = 100)
  @NotBlank
  @Size(min = 3, max = 100)
  String name;

  @Column(name = "cpf", nullable = false, length = 11)
  @NotBlank
  String CPF; // Cadastro de Pessoa Fisica = Natural Persons Register

  @Column(name = "rg", nullable = false, length = 9)
  @NotBlank
  String RG; // Numero do Registro Geral = Brazilian National Identity Card Number


  @ManyToOne
  @JoinColumn(name = "department_id", nullable = true)
  Department department; 

  @Column
  int balance;

  @OneToMany(mappedBy = "professor")
  List<Payment> payments;
}
