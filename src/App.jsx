import { Checkbox } from '#/components/1/Checkbox.jsx';
import { Select } from '#/components/2/Select.jsx';
import { Input } from '#/components/3/Input.jsx';
import { Hover } from '#/components/4/Hover.jsx';
import { Tab } from '#/components/5/Tab.jsx';
import { Form } from '#/components/6/Form.jsx';
import { Register } from '#/components/7/Register.jsx';
import { Message } from '#/components/8/Message.jsx';
import { Fetch } from '#/components/9/Fetch.jsx';
import { NormalAndReverse } from '#/components/10/NormalAndReverse.jsx';
import { UploadFile } from '#/components/11/UploadFile.jsx';
import { Calculator } from '#/components/12/Calculator.jsx';
import { PokemonPromises } from '#/components/13/PokemonPromises.jsx';
import { Contador } from '#/components/14/Counter.jsx';
import { Formulario } from '#/components/15/Formulario.jsx';
import { ListaTareas } from '#/components/16/ListaTareas.jsx';
import { SearchFilter } from '#/components/17/SearchFilter.jsx';
import { Paginacion } from '#/components/18/Paginacion.jsx';

const arrayComponents = [
  {
    title: 'Component 1',
    describe: 'We make sure that the input checkbox works correctly',
    ComponentToRender: Checkbox,
    id: crypto.randomUUID(),
    gradient: `linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)`
  },
  {
    title: 'Component 2',
    describe: 'We make sure that the Select works correctly',
    ComponentToRender: Select,
    id: crypto.randomUUID(),
    gradient: `linear-gradient(-225deg, #FF512F 0%, #DD2476 48%, #FF512F 100%)`
  },
  {
    title: 'Component 3',
    describe: 'We make sure that the Input works correctly',
    ComponentToRender: Input,
    id: crypto.randomUUID(),
    gradient: `linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)`
  },
  {
    title: 'Component 4',
    describe: 'We make sure that the Hover works correctly in a Button',
    ComponentToRender: Hover,
    id: crypto.randomUUID(),
    gradient: `linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%)`
  },
  {
    title: 'Component 5',
    describe: 'We make sure that the tab() works correctly in Inputs',
    ComponentToRender: Tab,
    id: crypto.randomUUID(),
    gradient: ` linear-gradient(to right, #ff8008, #ffc837)`
  },
  {
    title: 'Component 6',
    describe: 'We make sure that the Form works.',
    ComponentToRender: Form,
    id: crypto.randomUUID(),
    gradient: `linear-gradient(to right, #12c2e9, #c471ed, #f64f59)
`
  },
  {
    title: 'Component 7',
    describe: 'We make sure that the Register works.',
    ComponentToRender: Register,
    id: crypto.randomUUID(),
    gradient: `linear-gradient(to right, #2980b9, #6dd5fa, #ffffff)`
  },
  {
    title: 'Component 8',
    describe: 'We make sure that the Message paragraph is showing or not.',
    ComponentToRender: Message,
    id: crypto.randomUUID(),
    gradient: `linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)`
  },
  {
    title: 'Component 9',
    describe: 'We make sure that the Fetch works correctly',
    ComponentToRender: Fetch,
    id: crypto.randomUUID(),
    gradient: `linear-gradient(to right, #11998e, #38ef7d)`
  },
  {
    title: 'Component 10',
    describe: 'We make sure that the array reversed correctly',
    ComponentToRender: NormalAndReverse,
    id: crypto.randomUUID(),
    gradient: `linear-gradient(to right, #00f260, #0575e6);`
  },
  {
    title: 'Component 11',
    describe: 'We upload the file in an input',
    ComponentToRender: UploadFile,
    id: crypto.randomUUID(),
    gradient: `linear-gradient(90deg, #6e40aa, #6154c8, #4c6edb, #368ce1, #24aad8, #1ac7c2, #1ddea3, #30ee83, #52f667, #7ef658, #7ef658)
`
  },
  {
    title: 'Component 12',
    describe: 'A simple calculator',
    ComponentToRender: Calculator,
    id: crypto.randomUUID(),
    gradient: `linear-gradient(45deg, #f3ec78, #af4261)
`
  },
  {
    title: 'Component 13',
    describe: `Promises with Pokemon's Api`,
    ComponentToRender: PokemonPromises,
    id: crypto.randomUUID(),
    gradient: `linear-gradient(to right, #56ab2f, #a8e063)`
  },
  {
    title: 'Component 14',
    describe: `Simple Counter`,
    ComponentToRender: Contador,
    id: crypto.randomUUID(),
    gradient: `linear-gradient(to right, #00d2ff, #928dab)`
  },
  {
    title: 'Component 15',
    describe: `A form`,
    ComponentToRender: Formulario,
    id: crypto.randomUUID(),
    gradient: `linear-gradient(90deg, #0d0887, #41049d, #6a00a8, #8f0da4, #b12a90, #cb4679, #e16462, #f1834c, #fca636, #fcce25, #fcce25)`
  },
  {
    title: 'Component 16',
    describe: `Lista de Tareas`,
    ComponentToRender: ListaTareas,
    id: crypto.randomUUID(),
    gradient: `linear-gradient(90deg, #6e40aa, #963db3, #bf3caf, #e3419e, #fe4b83, #ff5e64, #ff7747, #fb9633, #e2b72f, #c7d63c, #c7d63c)`
  },
  {
    title: 'Component 17',
    describe: `SearchFilter`,
    ComponentToRender: SearchFilter,
    id: crypto.randomUUID(),
    gradient: `linear-gradient(90deg, #9e0142, #d13b4b, #f0704a, #fcab63, #fedc8c, #fbf8b0, #e0f3a1, #aadda2, #69bda9, #4288b5, #4288b5)`
  },
  {
    title: 'Component 18',
    describe: `Paginacion`,
    ComponentToRender: Paginacion,
    id: crypto.randomUUID(),
    gradient: `linear-gradient(90deg, #6e40aa, #be3caf, #fe4b83, #ff7747, #e3b62f, #b0ef5a, #53f666, #1edfa2, #23acd8, #4c6fdc, #4c6fdc)`
  }
];

export function App() {
  return (
    <>
      {arrayComponents.map(({ title, ComponentToRender, id, gradient }, idx) => (
        <section
          className={`am-container am-container-${idx + 1}`}
          key={id}
          title={title}
          style={{ ['--bg-color']: gradient }}
        >
          <ComponentToRender />
        </section>
      ))}
    </>
  );
}
