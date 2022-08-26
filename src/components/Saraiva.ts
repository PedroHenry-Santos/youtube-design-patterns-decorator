import { BookStore } from "./BookStore";

export class Saraiva implements BookStore {
  getBooks(): string[] {
    return ["1984", "Hamlet", "A divina comédia"];
  }
}