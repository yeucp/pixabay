import React, {useState, useEffect} from "react";

import Formulario from "./components/Formulario";
import Imagenes from "./components/Imagenes";


function App() {
  const [busqueda, setBusqueda] = useState('')
  const [imagenes, setImagenes] = useState([])
  const [pagina, setPagina] = useState(1)
  const [totalPaginas, setTotalPaginas] = useState(1)

  useEffect(()=>{
    const consultarAPI = async ()=>{
      if(busqueda === ''){
        return
      }
      const key = '12593036-7164244873b5719f3b19de761'
      const itemsPorPagina = 32
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${itemsPorPagina}&page=${pagina}`
  
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      setImagenes(resultado.hits)
      
      // total de paginas.
      setTotalPaginas(Math.ceil(resultado.totalHits/ itemsPorPagina))

    }
    consultarAPI()
  }, [busqueda, pagina])

  // pagina anterior
  const paginaAnterior = () => {
    const anterior = pagina - 1
    if (anterior === 0) return
    setPagina(anterior)
  }

  // pagina siguiente
  const paginaSiguiente = () => {
    const siguiente = pagina + 1
    if (siguiente > totalPaginas) return
    setPagina(siguiente)
  }

  const jumbotron = document.querySelector('.jumbotron')
  if(jumbotron){
    jumbotron.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imágenes</p>
        <Formulario 
          setBusqueda={setBusqueda}
        />
      </div>
      <div className="row justify-content-center">
        <Imagenes 
          imagenes={imagenes}
        />
        
        {pagina > 1 ? 

          (<button
            className="btn btn-info mr-1"
            onClick={paginaAnterior}
          >
            &laquo; Anterior
          </button>) :

          null
        }

        {
        pagina < totalPaginas ?

        (<button 
          className="btn btn-info mr-1"
          onClick={paginaSiguiente}
        >
          Siguiente &raquo;
        </button>) :

        null
        }
      </div>
    </div>
  );
}

export default App;
