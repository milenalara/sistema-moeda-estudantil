package br.pucminas.sistema_moedas_api.Model;

import java.util.List;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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
public class Student extends User {
  @Column
  @NotNull
  Integer balance; // Saldo

  @ManyToOne
  @JoinColumn(name = "educationalInstitution_id", nullable = false)
  EducationalInstitution educationalInstitution; // Instituicao de Ensino

  @ManyToOne
  @JoinColumn(name = "course_id", nullable = false)
  Course course; // Curso

  @OneToMany(mappedBy = "student")
  List<Payment> payments;
}
