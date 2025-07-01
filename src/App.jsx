import { Checkbox } from '#/components/1/Checkbox.jsx';
import { Select } from '#/components/2/Select.jsx';
import { Input } from '#/components/3/Input.jsx';

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
    gradient: `linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%);`
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
