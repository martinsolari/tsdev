import { Person } from "./domain/person";
const person = new Person("Martin");

const element = document.getElementById("hello");
if (element) {
  element.textContent = person.greet();
}
