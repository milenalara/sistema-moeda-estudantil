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
  @ManyToOne
  @JoinColumn(name = "department_id", nullable = true)
  Department department; 

  @Column
  int balance;

  @OneToMany(mappedBy = "professor")
  List<Payment> payments;
}
