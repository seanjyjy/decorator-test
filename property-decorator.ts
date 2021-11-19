function propertyInformation(target: Object, propertyKey: string) {
  let value: string = this[propertyKey];

  const get = function () {
    console.log(`${propertyKey} value: ${value}`);
    return value;
  };

  const set = function (val: string) {
    console.log(`new ${propertyKey} value: ${val}`);
    value = val;
  };
  Object.defineProperty(target, propertyKey, { set, get });
}

class BankPropertyDecorator {
  name: string;

  @propertyInformation
  pin: string;

  constructor(name: string, pin: string) {
    this.name = name;
    this.pin = pin;
  }
}

const bankPropertyDecorator = new BankPropertyDecorator("Ashley", "123456");
bankPropertyDecorator.pin;
bankPropertyDecorator.pin = "654321";
