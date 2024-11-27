export class Person {
  private firstName: string;
  constructor(name: string) {
    this.firstName = name;
  }
  greet(): string {
    return this.firstName;
  }
}
