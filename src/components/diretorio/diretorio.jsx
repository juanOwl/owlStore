import CardContainer from "../card-container/card-container";
import './diretorio.scss'

const Diretorio = ({ categorias }) => {
  return (
    <div className="main-container">
      {categorias.map((categorias) => (
        <CardContainer key={categorias.id} categorias={categorias} />
      ))}
    </div>
  )
}

export default Diretorio
