export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(a) {
    this._codee = a;
  }

  get name() {
    return this._name;
  }

  set name(b) {
    this._name = b;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
