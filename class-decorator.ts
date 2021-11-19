function BankCard(constructor: Function) {
  constructor.prototype.cardId = Math.floor(Math.random() * 1000);
}

@BankCard
class HSBCBankCard {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const card = new HSBCBankCard("Dennis");
console.log(card.name);
// @ts-ignore
console.log(card.cardId);
