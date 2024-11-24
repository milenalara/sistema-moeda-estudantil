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
@Table(name = "company")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Company extends User { // empresa
    @Column(nullable = false, length = 100)
    @NotBlank
    @Size(min = 3, max = 100)
    String name;

    @Column(name = "cnpj", length=14, nullable=false)
    @NotBlank
    String CPNJ;

    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL, orphanRemoval = true)
    List<Advantage> advantages;
}
