package br.pucminas.sistema_moedas_api.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "transaction")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Transaction {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(unique = true)
  Long id;

  @ManyToOne
  @JoinColumn(name = "student_id", nullable = false)
  Student student;

  @ManyToOne
  @JoinColumn(name = "advantage_id", nullable = false)
  Advantage advantage;

  LocalDateTime dateTime;
}
