package br.pucminas.sistema_moedas_api.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "account")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Account { // conta
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  Long id;

  Double balance; // saldo

  @OneToOne
  @PrimaryKeyJoinColumn(name = "student_id")
  Student student;
}
