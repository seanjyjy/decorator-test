function upperCase(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  return {
    enumerable: false,
    configurable: false,
    get: function () {
      return descriptor.get.call(this).toUpperCase();
    },
    set: function (name: string) {
      descriptor.set.call(this, name);
    },
  };
}

class BankHolder {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @upperCase
  get accountName(): string {
    return this.name;
  }

  set renameAccountHolder(name: string) {
    this.name = name;
  }
}

const kenny = new BankHolder("Kenny");
console.log(kenny.accountName);
