class Person {
  public name: string = 'noname';
  public age: number = 0;
  public phone: string = '091212345678';

  constructor(name_: string, age_: number, phone_: string) {
    this.name = name_;
    this.age = age_;
    this.phone = phone_;
  }

  public doEat(who: string, address: string): void {
    console.log(`${this.name}和${who}在${address}吃飯`);
  }
}

let LuyiPerson = new Person('Luyi', 22, '0999888888');

LuyiPerson.doEat('Ginsha', '橘色');
console.log(LuyiPerson);
