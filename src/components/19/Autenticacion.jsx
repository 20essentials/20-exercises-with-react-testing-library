import { useState } from 'react';

const USUARIOS = [
  { email: 'usuario@ejemplo.com', password: '123456' },
  { email: 'admin@ejemplo.com', password: 'admin123' }
];

const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  autenticado: false
};

export function Autenticacion() {
  const [email, setEmail] = useState(INITIAL_STATE.email);
  const [password, setPassword] = useState(INITIAL_STATE.password);
  const [error, setError] = useState(INITIAL_STATE.error);
  const [autenticado, setAutenticado] = useState(INITIAL_STATE.autenticado);

  const handleSubmit = e => {
    e.preventDefault();
    setError('');

    const usuario = USUARIOS.find(
      u => u.email === email && u.password === password
    );

    if (usuario) {
      setAutenticado(true);
    } else {
      setError('Credenciales inválidas');
    }
  };

  const handleLogout = () => {
    setEmail(INITIAL_STATE.email);
    setPassword(INITIAL_STATE.password);
    setError(INITIAL_STATE.error);
    setAutenticado(INITIAL_STATE.autenticado);
  };

  if (autenticado) {
    return (
      <div>
        <h2>Bienvenido</h2>
        <p>Has iniciado sesión como: {email}</p>
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor='password'>Contraseña:</label>
          <input
            id='password'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>

        <button type='submit'>Iniciar Sesión</button>
      </form>
    </div>
  );
}
