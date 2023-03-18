export type TAttributes = {
  idade: number;
};

export class Pessoa {
  private _idade: number;

  constructor(attributes: TAttributes) {
    this._idade = attributes.idade;
  }

  eMaiorDeIdade(): boolean {
    return this._idade >= 18;
  }
}
