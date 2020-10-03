import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Landing from "./components/Landing";

function App() {
   return (
      <Fragment>
         <Header />
         <Landing />
      </Fragment>
   );
}

export default App;
