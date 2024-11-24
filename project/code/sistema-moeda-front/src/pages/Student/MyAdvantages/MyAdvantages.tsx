import React from "react";
import { Link } from "react-router-dom";

const MyAdvantages = () => {
  return (
    <>
      <h1>Boas vindas!</h1>
      <p>Troque seus pontos por vantagems em <Link to={`/aluno/vantagens`}>VANTAGENS</Link></p>
      <p>Consulte seu extrato em <Link to={`/aluno/extrato`}>EXTRATO</Link></p>
    </>
  );
};

export default MyAdvantages;
