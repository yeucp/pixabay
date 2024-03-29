import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Error from './Error';

const Formulario = ({setBusqueda}) => {

    const [termino, setTermino] = useState('')
    const [error, setError] = useState(false)

    const buscarImagenes = e =>{
        e.preventDefault()
        if(termino.trim() === ''){
            setError(true)
            return
        }
        setError(false)

        setBusqueda(termino)
    }

    return (
        <form
            onSubmit={buscarImagenes}
        >
            <div className="row">
                <div className="form-group col-lg-8">
                    <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen, ej futbol, café"
                        onChange={e => setTermino(e.target.value)}
                    />
                </div>
                <div className="form-group col-lg-4">
                    <input 
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
            </div> 

            {error ? <Error mensaje="Agrega un término de búsqueda"/> : null}

        </form>
    );
};

Formulario.propTypes = {
    setBusqueda: PropTypes.func.isRequired
};

export default Formulario;