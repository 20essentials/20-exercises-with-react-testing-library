export function Checkbox({ onChange}) {
  return (
    <form>
      <legend>Terms and Conditions</legend>
      <label>
        I agree to the terms and conditions
        <input onChange={onChange} type='checkbox' name='terms' />
      </label>
      <label>
        I agree to the privacy policy
        <input onChange={onChange} type='checkbox' name='privacy' />
      </label>
      <label>
        I want to receive newsletters
        <input onChange={onChange} type='checkbox' name='newsletter' />
      </label>
      <label>
        I want to receive promotional offers
        <input onChange={onChange} type='checkbox' name='promotions' />
      </label>
    </form>
  );
}
