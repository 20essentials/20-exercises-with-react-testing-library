import { Form } from '#/components/06/Form.jsx';
import { FormularioValidacion } from '#/components/06/FormularioValidacion.jsx';
import '#/components/06/SimpleFormAndFormWithValidation.css';

export function SimpleFormAndFormWithValidation() {
  return (
    <article className='simple-form-and-validated-form'>
      <aside className='simple-form-and-validated-form-inner simple-form-and-validated-form-inner-left'>
        <FormularioValidacion />
      </aside>
      <aside className='simple-form-and-validated-form-inner simple-form-and-validated-form-inner-right'>
        <Form />
      </aside>
    </article>
  );
}
