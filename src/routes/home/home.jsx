import React from "react";
import Diretorio from "../../components/diretorio/diretorio.jsx";

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { Outlet } from 'react-router-dom'

const Home = () => {
  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }}
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
