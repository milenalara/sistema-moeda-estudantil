package br.pucminas.sistema_moedas_api.Model;

public class Student {
  Long id;
  String name;
  String email;
  String CPF; // Cadastro de Pessoa Fisica = Natural Persons Register
  String RG; // Numero do Registro Geral = Brazilian National Identity Card Number
  String educationalInstitution; // Instituicao de Ensino
  String course; // Curso
  Account account;
}
