import { BookShowcase } from "./components/BookShowcase";
import { Saraiva } from "./components/Saraiva";
import { CulturaDecorator } from "./decorator/CulturaDecorator";
import { TravessaDecorator } from "./decorator/TravessaDecorator";


const saraiva = new Saraiva();
const travessaPlusSaraiva = new TravessaDecorator(saraiva)
const culturaPlusSaraivaPlusTravessa = new CulturaDecorator(travessaPlusSaraiva)
const bookShowcase = new BookShowcase(culturaPlusSaraivaPlusTravessa);

console.log(bookShowcase.execute());