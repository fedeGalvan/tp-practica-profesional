import React from "react";
import { Pagination } from "react-bootstrap";
import "./sass/Paginador.scss";

const Paginador = ({ page, setPage, totalPages, element }) => {
   function scrollIntoView() {
      element.scrollIntoView({ behavior: "smooth" });
   }

   function nextPage() {
      if (page >= totalPages) {
         return;
      } else {
         setPage(page + 1);
      }
   }

   function backPage() {
      if (page !== 1) {
         setPage(page - 1);
      }
   }

   return (
      <div className='paginator'>
         <Pagination onClick={scrollIntoView()}>
            <Pagination.First onClick={() => setPage(1)} />
            <Pagination.Prev onClick={() => backPage()} />
            {page === 1 ? null : <Pagination.Item onClick={() => backPage()}>{page - 1}</Pagination.Item>}
            <Pagination.Item active>{page}</Pagination.Item>
            {page === totalPages ? null : <Pagination.Item onClick={() => nextPage()}>{page + 1}</Pagination.Item>}
            <Pagination.Next onClick={() => nextPage()} />
            <Pagination.Last onClick={() => setPage(totalPages)} />
         </Pagination>
      </div>
   );
};

export default Paginador;
