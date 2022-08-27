import { BookStore } from "../components/BookStore";
import { Cultura } from "../components/Cultura";

export class CulturaDecorator extends Cultura {
  constructor(private readonly bookStore: BookStore) {
    super();
  }

  getBooks(): string[] {
    return [...this.bookStore.getBooks(), ...super.getBooks()];
  }
}