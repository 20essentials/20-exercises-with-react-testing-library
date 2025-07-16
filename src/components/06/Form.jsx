export function Form({ onSubmit }) {

  return (
    <form onSubmit={onSubmit}>
      <label>
        Username{' '}
        <input
          type='text'
          defaultValue={'Pedro'}
          placeholder='Your Username...'
        />
      </label>
      <label>
        Password{' '}
        <input
          type='password'
          defaultValue={'Leenz'}
          placeholder='Your password...'
        />
      </label>
      <input type='submit' value='LogIn' />
    </form>
  );
}
