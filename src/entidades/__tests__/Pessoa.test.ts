import { Pessoa, TAttributes } from "../Pessoa";

const mockMenorIdade: TAttributes = {
  idade: 1.5,
};

describe("Unidade::Entidade::Pessoa", () => {
  it("deve criar uma pessoa", () => {
    const pessoa = new Pessoa(mockMenorIdade);
    expect(pessoa).toBeTruthy();
  });
  it("deve retornar que a pessoa é menor de idade", () => {
    const pessoa = new Pessoa(mockMenorIdade);
    expect(pessoa.eMaiorDeIdade()).toBeFalsy();
  });

  it("deve retornar que a pessoa é maior de idade", () => {
    const pessoa = new Pessoa({ idade: 18 });
    expect(pessoa.eMaiorDeIdade()).toBeTruthy();
  });
});
