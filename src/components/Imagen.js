import React, { Fragment, useState } from "react";
import ModalImg from "./Modal";

const Imagen = ({ imagen }) => {
   const [modalOpen, setModalOpen] = useState(false);

   function toggleModal() {
      setModalOpen(!modalOpen);
   }

   return (
      <Fragment>
         <div className="col-lg-3 col-md-4 col-12 mb-4">
            <ModalImg
               imagen={imagen}
               isOpen={modalOpen}
               onToggle={toggleModal}
            />
            <a className="d-block h-100" onClick={toggleModal}>
               <img
                  src={imagen.webformatURL}
                  className="img-fluid img-thumbnail"
                  alt={imagen.user}
               ></img>
            </a>
         </div>
      </Fragment>
   );
};

export default Imagen;
