package br.pucminas.sistema_moedas_api.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name="advantage")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Advantage { 

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(unique = true)
  Long id;

  @Column(nullable = false, length = 100)
  @NotBlank
  @Size(min = 3, max = 100)
  String name;

  @Column
  @NotNull
  Integer cost; 

  @Column(nullable = false, length = 100)
  @NotBlank
  @Size(min = 3, max = 100)
  String description;

  @ManyToOne
  @JoinColumn(name = "company_id", nullable = false)
  Company company; 

}
