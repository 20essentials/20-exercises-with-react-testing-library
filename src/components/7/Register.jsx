export function Register({ createUser }) {
  function onSubmit(e) {
    const { password, username } = e.target;
    createUser({
      username: username.value,
      password: password.value
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        Username{' '}
        <input
          type='text'
          defaultValue={'Margot'}
          name='username'
          placeholder='Your Username...'
        />
      </label>
      <label>
        Password{' '}
        <input
          type='password'
          defaultValue={'Smith'}
          name='password'
          placeholder='Your password...'
        />
      </label>
      <input type='submit' value='SignUp' />
    </form>
  );
}
