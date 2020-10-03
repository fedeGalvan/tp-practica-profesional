import React, { useState, useEffect, Fragment } from "react";
import "./sass/Landing.scss";
import { FaSearch } from "react-icons/fa";
import { Button, InputGroup, Form, FormControl } from "react-bootstrap";
import Gallery from "./Gallery";
import Paginador from "./Paginador";

const Landing = () => {
   const [inputValue, setInputValue] = useState("");
   const [search, setSearch] = useState("");
   const [galeria, setGaleria] = useState([]);
   const [recommendations, setRecommendations] = useState("Nuestras recomendaciones");
   const [imgPerPage, setImgPerPage] = useState(48);
   const [page, setPage] = useState(1);
   const [totalPages, setTotalPages] = useState(1);

   const element = document.querySelector("#recommendations");

   useEffect(() => {
      async function ApiCall() {
         const key = "18413650-1f394e20d1d451a6b56d26e4c";
         const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imgPerPage}&page=${page}&editors_choice=true&order=latest&lang=es`;
         const data = await fetch(url);
         const res = await data.json();
         setGaleria(res.hits);
         const calcTotalPages = Math.ceil(res.totalHits / imgPerPage);
         setTotalPages(calcTotalPages);
      }
      ApiCall();
   }, [search, page, imgPerPage]);

   function find(e) {
      e.preventDefault();
      const input = document.querySelector("#find");
      setSearch(inputValue);
      setRecommendations(`Nuestras recomendaciones para "${inputValue}" `);
      input.value = "";
      element.scrollIntoView({
         behavior: "smooth",
      });
      setPage(1);
   }

   return (
      <Fragment>
         <div className='container-fluid'>
            <Form inline className='landing__search' onSubmit={(e) => find(e)}>
               <div className='tags'>
                  Más populares:
                  <p>fondo</p>,<p>wallpaper</p>,<p>naturaleza</p>,<p>comida</p>,<p>negocios</p>,<p>oficina</p>,
                  <p>computadora</p>,<p>escuela</p>,<p>dinero</p>,<p>perro</p>,<p>cielo</p>,<p>flores</p>,<p>amor</p>
               </div>
               <InputGroup>
                  <FormControl
                     placeholder='Explorar'
                     id='find'
                     autoComplete='off'
                     onChange={(e) => setInputValue(e.target.value)}
                  />
                  <InputGroup.Append>
                     <Button id='search' type='submit'>
                        <FaSearch></FaSearch>
                     </Button>
                  </InputGroup.Append>
               </InputGroup>
            </Form>
         </div>
         <h2 id='recommendations'>
            <span>{recommendations}</span>
         </h2>
         <div className='container'>
            <Gallery galeria={galeria} />
         </div>

         <Paginador page={page} setPage={setPage} totalPages={totalPages} element={element} />
      </Fragment>
   );
};

export default Landing;
