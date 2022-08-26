import { BookShowcase } from "./components/BookShowcase";
import { Saraiva } from "./components/Saraiva";


const saraiva = new Saraiva();
const bookShowcase = new BookShowcase(saraiva)

console.log(bookShowcase.execute());