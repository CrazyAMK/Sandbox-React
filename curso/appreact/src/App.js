import React from "react";
import Exercicio1 from "./Exercicios/Exercicio1";
import Exercicio2 from "./Exercicios/Exercicio2";
import Exercicio3 from "./Exercicios/Exercicio3/Exercicio3";
import Exercicio4 from "./Exercicios/Exercicio4/Exercicio4";
import Exercicio5 from "./Exercicios/Exercicio5/Exercicio5";
import Exercicio6 from "./Exercicios/Exercicio6/Exercicio6";
import Footer from "./Footer";
import Form from "./Form/Form";
import Header from "./Header";

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto} {children}
    </h1>
  );
};

const App = () => {
  return (
    <>
      {/* <Header />
      <Titulo cor="green" texto="Exercicios">
        de React
      </Titulo> */}
      {/* <Exercicio1 /> */}
      {/* <Exercicio2 /> */}
      {/* <Exercicio3 /> */}
      {/* <Exercicio4 /> */}
      {/* <Exercicio5 /> */}
      <Exercicio6 />
      {/* <Form />
      <Footer /> */}
    </>
  );
};

export default App;
