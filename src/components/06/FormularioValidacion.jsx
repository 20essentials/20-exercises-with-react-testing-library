import { useState, useRef } from 'react';

export const FormularioValidacion = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    password: '',
    confirmarPassword: ''
  });

  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);
  const theUserHasInteracted = useRef(false);

  const validarFormulario = () => {
    if (!theUserHasInteracted.current) {
      theUserHasInteracted.current = true;
    }

    const nuevosErrores = {};

    if (formulario.nombre.length < 3) {
      nuevosErrores.nombre = 'El nombre debe tener al menos 3 caracteres';
    }

    if (formulario.password.length < 6) {
      nuevosErrores.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    if (formulario.password !== formulario.confirmarPassword) {
      nuevosErrores.confirmarPassword = 'Las contraseñas no coinciden';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (validarFormulario()) {
      console.log('Formulario enviado:', formulario);
      setEnviado(true);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormulario(prev => ({
      ...prev,
      [name]: value
    }));

    setErrores({});
  };

  return (
    <div className='formulario-validacion'>
      <h2>Registro</h2>

      {enviado ? (
        <div className='mensaje-exito'>
          <h3>¡Registro exitoso!</h3>
          <p>Bienvenido {formulario.nombre}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='campo'>
            <label htmlFor='nombre'>Nombre:</label>
            <input
              type='text'
              id='nombre'
              name='nombre'
              value={formulario.nombre}
              onChange={handleChange}
            />
            {errores.nombre && <span className='error'>{errores.nombre}</span>}
            {!formulario.nombre && theUserHasInteracted.current && (
              <span className='error'>El nombre es requerido</span>
            )}
          </div>

          <div className='campo'>
            <label htmlFor='password'>Contraseña:</label>
            <input
              type='password'
              id='password'
              name='password'
              value={formulario.password}
              onChange={handleChange}
            />
            {errores.password && (
              <span className='error'>{errores.password}</span>
            )}
            {!formulario.password && theUserHasInteracted.current && (
              <span className='error'>La password es requerida</span>
            )}
          </div>

          <div className='campo'>
            <label htmlFor='confirmarPassword'>Confirmar Contraseña:</label>
            <input
              type='password'
              id='confirmarPassword'
              name='confirmarPassword'
              value={formulario.confirmarPassword}
              onChange={handleChange}
            />
            {errores.confirmarPassword && (
              <span className='error'>{errores.confirmarPassword}</span>
            )}
            {!formulario.confirmarPassword && theUserHasInteracted.current && (
              <span className='error'>Confirmar password es requerida</span>
            )}
          </div>

          <button type='submit'>Registrarse</button>
        </form>
      )}
    </div>
  );
};
