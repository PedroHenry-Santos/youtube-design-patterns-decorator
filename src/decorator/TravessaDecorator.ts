import { BookStore } from "../components/BookStore";
import { Travessa } from "../components/Travessa";

export class TravessaDecorator extends Travessa {
  constructor(private readonly bookStore: BookStore) {
    super();
  }

  getBooks(): string[] {
    return [...this.bookStore.getBooks(), ...super.getBooks()];
  }
}