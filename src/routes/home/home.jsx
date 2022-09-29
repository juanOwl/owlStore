import React from "react";
import Diretorio from "../../components/diretorio/diretorio.jsx";

import { Outlet } from 'react-router-dom'

const Home = () => {
  const categorias = [
    {
      id: 1,
      nome: "Bonés",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      nome: "Casacos",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      nome: "Calçados",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      nome: "Feminino",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      nome: "Masculino",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
  <div>
    <Outlet/>
    <Diretorio categorias={categorias} />
  </div>
  )
};

export default Home;
