package br.pucminas.sistema_moedas_api.Model;

public enum Advantage { // vantagens
  CASHBACK(10),
  DISCOUNT(1),
  GIFT(13);

  private final int value;
  Advantage(int value) {
    this.value = value;
  }
}
