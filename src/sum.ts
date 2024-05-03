export function sum(a: number, b: number) {
  return a + b;
}

export function sayHello() {
  return "Hello!";
}

export default class User {
  constructor(private name: string) {}

  getName() {
    return this.name;
  }
}
