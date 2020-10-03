import React, {Fragment} from 'react';
import '../components/sass/Gallery.scss';
import Imagen from './Imagen';


const Gallery = ({galeria}) => {
   
    return (
        <Fragment>
        <div className="row" id="gallery">
            {galeria.map(imagen => (
                <Imagen 
                    key={imagen.id}
                    imagen={imagen}
                />
            ))}
        </div>
        </Fragment>
    );
}
 
export default Gallery;