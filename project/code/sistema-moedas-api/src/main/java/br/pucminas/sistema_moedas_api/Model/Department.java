package br.pucminas.sistema_moedas_api.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "department")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Department {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  Long id;

  @ManyToOne
  @JoinColumn(name = "educationalInstitution_id", nullable = false)
  EducationalInstitution educationalInstitution;
}
