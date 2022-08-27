import { BookStore } from "./BookStore";

export class Cultura implements BookStore {
  getBooks(): string[] {
    return ["A revolução dos bichos", "Guerra e paz", "Homem invisível"];
  }
}