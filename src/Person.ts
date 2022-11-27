class Person {
  public name: string = 'noname';
  public age: number = 0;
  public phone: string = '091212345678';

  /**
   * doEat
   */
  // public doEat(): number {
  //   return 3;
  // }
  public doEat(who: string, address: string): void {
    console.log(`${this.name}和${who}在${address}吃飯`);
  }
}

let LuyiPerson = new Person();
LuyiPerson.name = 'Luyi';
LuyiPerson.age = 22;
LuyiPerson.phone = '0999888888';
LuyiPerson.doEat('Ginsha', '橘色');
