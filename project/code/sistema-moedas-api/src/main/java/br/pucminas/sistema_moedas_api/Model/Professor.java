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
public class Professor {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(unique = true) 
  Long id;

  @Column
  String name;

  @Column
  String CPF; 

  @ManyToOne
  @JoinColumn(name = "department_id", nullable = true)
  Department department; 

  @Column
  int balance;

  @Column(nullable = false, length = 100)
  @NotBlank
  @Size(min = 3, max = 100)
  String password;

  @OneToMany(mappedBy = "professor")
  List<Payment> payments;
}
