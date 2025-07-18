import { useState, useEffect, useRef } from 'react';
import '#/components/02/Autocompletado.css'

const opciones = [
  'React',
  'React Native',
  'React Router',
  'Redux',
  'Redux Toolkit',
  'Redux Saga',
  'Redux Thunk',
  'React Query',
  'React Testing Library',
  'Vitest',
  'Next.js',
  'Gatsby',
  'Vite',
  'Webpack',
  'Parcel',
  'Babel',
  'ESLint',
  'Prettier',
  'Tailwind CSS',
  'Sass',
  'Styled Components',
  'Emotion',
  'Framer Motion',
  'Zustand',
  'Jotai',
  'Recoil',
  'MobX',
  'Axios',
  'Fetch API',
  'SWR',
  'TanStack Query',
  'Jest',
  'Cypress',
  'Playwright',
  'Storybook',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Mongoose',
  'Firebase',
  'Supabase',
  'GraphQL',
  'Apollo Client',
  'Prisma',
  'tRPC',
  'Docker',
  'Git',
  'GitHub Actions',
  'Netlify',
  'Vercel',
  'AWS Amplify'
];

export const Autocompletado = () => {
  const [valor, setValor] = useState('');
  const [sugerencias, setSugerencias] = useState([]);
  const [mostrarSugerencias, setMostrarSugerencias] = useState(false);
  const [indiceSeleccionado, setIndiceSeleccionado] = useState(-1);
  const contenedorRef = useRef(null);

  useEffect(() => {
    if (valor) {
      const filtradas = opciones.filter(opcion =>
        opcion.toLowerCase().includes(valor.toLowerCase())
      );
      setSugerencias(filtradas);
      setMostrarSugerencias(true);
    } else {
      setSugerencias([]);
      setMostrarSugerencias(false);
      setIndiceSeleccionado(-1);
    }
  }, [valor]);

  useEffect(() => {
    const handleClickFuera = evento => {
      if (
        contenedorRef.current &&
        !contenedorRef.current.contains(evento.target)
      ) {
        setMostrarSugerencias(false);
      }
    };

    document.addEventListener('mousedown', handleClickFuera);
    return () => document.removeEventListener('mousedown', handleClickFuera);
  }, []);

  const handleKeyDown = e => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setIndiceSeleccionado(prev =>
        prev < sugerencias.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setIndiceSeleccionado(prev => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === 'Enter' && indiceSeleccionado >= 0) {
      e.preventDefault();
      setValor(sugerencias[indiceSeleccionado]);
      setMostrarSugerencias(false);
    } else if (e.key === 'Escape') {
      setMostrarSugerencias(false);
    }
  };

  return (
    <div className='autocompletado' ref={contenedorRef}>
      <input
        type='text'
        value={valor}
        onChange={e => setValor(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='Buscar...'
      />

      {mostrarSugerencias && sugerencias.length > 0 && (
        <ul className='sugerencias'>
          {sugerencias.map((sugerencia, index) => (
            <li
              key={sugerencia}
              className={index === indiceSeleccionado ? 'seleccionado' : ''}
              onClick={() => {
                setValor(sugerencia);
                setMostrarSugerencias(false);
              }}
            >
              {sugerencia}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
