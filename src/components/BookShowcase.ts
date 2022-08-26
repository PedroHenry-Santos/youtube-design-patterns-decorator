import { BookStore } from "./BookStore";

export class BookShowcase {
  constructor (private readonly bookStore: BookStore) {}

  execute(): string[] {
    return this.bookStore.getBooks();
  }
}