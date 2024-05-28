import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { Brand, fromBrand, toBrand } from '@anthonypena/types-utils';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

type PersonId = Brand<string, 'PersonId'>;
type SpaceId = Brand<string, 'SpaceId'>;

interface Person {
    id: PersonId;
}
interface Space {
    id: SpaceId;
}

const person1: Person = { id: toBrand('1') };
const space1: Space = { id: toBrand('1') };

const space2Id: SpaceId = toBrand('2');
const space2IdString: string = fromBrand(space2Id);
const person2: Person = { id: space2Id };
const person3: Person = space1;
const person4: Person = { id: toBrand(space2Id+'') };
const person5: Person = { id: toBrand(space2Id+person1.id) };
const person6: Person = { id: toBrand(space2IdString) };

console.log({ person1, person2, person3, person4, person5, person6, space1 });

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
