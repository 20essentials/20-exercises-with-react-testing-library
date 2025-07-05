import { Checkbox } from '#/components/1/Checkbox.jsx';
import { Select } from '#/components/2/Select.jsx';
import { Input } from '#/components/3/Input.jsx';
import { Hover } from '#/components/4/Hover.jsx';
import { Tab } from '#/components/5/Tab.jsx';
import { Form } from '#/components/6/Form.jsx';
import { Register } from '#/components/7/Register.jsx';
import { Message } from '#/components/8/Message.jsx';
import { Fetch } from '#/components/9/Fetch.jsx';

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
