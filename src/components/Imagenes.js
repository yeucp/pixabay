import React from 'react';
import PropTypes from 'prop-types';

import Imagen from './Imagen';

const Imagenes = ({imagenes}) => {
    return (
        <div className="col-12 p-5 row">
            {imagenes.map(imagen => (
                <Imagen
                    key={imagen.id}
                    imagen={imagen}
                />
            ))}
        </div>
    );
};

Imagenes.propTypes = {
    imagenes: PropTypes.array.isRequired
};

export default Imagenes;