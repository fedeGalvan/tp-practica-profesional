import React, { Fragment } from "react";
import { Modal } from "react-bootstrap";
import "./sass/Modal.scss";

const ModalImg = ({ imagen, isOpen, onToggle }) => {
   const { largeImageURL, likes, tags, user, userImageURL, user_id } = imagen;
   const userLink = `https://pixabay.com/users/${user}-${user_id}/`;

   return (
      <Fragment>
         <Modal
            show={isOpen}
            onHide={onToggle}
            animation={true}
            keyboard={false}
         >
            <Modal.Header closeButton>
               <Modal.Title>
                  <img
                     src={
                        userImageURL !== ""
                           ? userImageURL
                           : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQP-i5liksKo3g85Qz90jpYieJ4J_YGy5S7JQ&usqp=CAU"
                     }
                  ></img>
                  <a href={userLink} target="_blank">
                     <p>{user}</p>
                  </a>
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <img src={largeImageURL}></img>
            </Modal.Body>
            <Modal.Footer>
               <div className="tags">
                  <p>Tambien podrías buscar: {tags}</p>
               </div>
               {/* <button onClick={() => download()}>asd</button> */}
            </Modal.Footer>
         </Modal>
      </Fragment>
   );
};

export default ModalImg;
