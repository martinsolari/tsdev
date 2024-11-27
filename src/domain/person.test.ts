import { Person } from "./person";

describe("greet function", () => {
  it("should return a greeting with the name", () => {
    const person = new Person("Martin");
    expect(person.greet()).toEqual("Martin");
  });
});
