import { useState } from 'react';

const ITEMS_POR_PAGINA = 5;

export function Paginacion({ items }) {
  const [paginaActual, setPaginaActual] = useState(1);

  // Error: el cálculo de páginas totales es incorrecto
  const totalPaginas = Math.ceil(items.length / ITEMS_POR_PAGINA);

  // Error: el cálculo de items a mostrar es incorrecto
  const itemsAMostrar = items.slice(
    (paginaActual - 1) * ITEMS_POR_PAGINA,
    ITEMS_POR_PAGINA * paginaActual
  );
  // 0 - 5 (ultimo no)
  // 5 - 10 (ultimo)
  //10 - 15

  const cambiarPagina = nuevaPagina => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
    // Error: no valida los límites de página
  };

  return (
    <div>
      <h2>Lista Paginada</h2>

      <ul>
        {itemsAMostrar.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div>
        <button
          onClick={() => cambiarPagina(paginaActual - 1)}
          disabled={paginaActual === 1}
        >
          Anterior
        </button>

        <span>
          Página {paginaActual} de {totalPaginas}
        </span>

        <button
          onClick={() => cambiarPagina(paginaActual + 1)}
          disabled={paginaActual === totalPaginas}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
