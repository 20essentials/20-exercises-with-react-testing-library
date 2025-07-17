import { Tab } from '#/components/04/Tab.jsx';
import { Hover } from '#/components/04/Hover.jsx';
import '#/components/04/HoverAndTab.css';

export function HoverAndTab() {
  return (
    <article className='hover-and-tab'>
      <aside className='hover-and-tab-inner hover-and-tab-inner-left'>
        <Hover />
      </aside>
      <aside className='hover-and-tab-inner hover-and-tab-inner-right'>
        <Tab />
      </aside>
    </article>
  );
}
