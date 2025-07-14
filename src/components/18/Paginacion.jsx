import { useState } from 'react';

const ITEMS_POR_PAGINA = 5;

export function Paginacion({
  items = Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`)
}) {
  const [paginaActual, setPaginaActual] = useState(1);

  const totalPaginas = Math.ceil(items.length / ITEMS_POR_PAGINA);

  const itemsAMostrar = items.slice(
    (paginaActual - 1) * ITEMS_POR_PAGINA,
    ITEMS_POR_PAGINA * paginaActual
  );

  const cambiarPagina = nuevaPagina => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
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
