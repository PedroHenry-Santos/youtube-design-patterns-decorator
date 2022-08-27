import { BookStore } from "./BookStore";

export class Travessa implements BookStore {
  getBooks(): string[] {
    return ["Alice", "Cinderella", "Os miseráveis"];
  }
}