import { Checkbox } from '#/components/01/Checkbox.jsx';
import { Select } from '#/components/01/Select.jsx';
import '#/components/01/CheckBoxAndSelect.css';

export function CheckBoxAndSelect() {
  return (
    <article className='checkbox-and-select'>
      <aside className='checkbox-and-select-inner checkbox-and-select-inner-left'>
        <Select />
      </aside>
      <aside className='checkbox-and-select-inner checkbox-and-select-inner-right'>
        <Checkbox />
      </aside>
    </article>
  );
}
