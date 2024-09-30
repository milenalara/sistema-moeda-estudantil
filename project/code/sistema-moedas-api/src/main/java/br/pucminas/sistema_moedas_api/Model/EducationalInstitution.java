package br.pucminas.sistema_moedas_api.Model;

import java.util.List;

public class EducationalInstitution {
  Long id;
  String cnpj; // Cadastro Nacional de Pessoas Juridicas = National Registry of Legal Entities
  String name;
  List<Professor> professors;
}
