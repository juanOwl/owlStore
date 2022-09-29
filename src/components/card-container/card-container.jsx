import './card-container.scss'

const CardContainer = ({categorias}) => {
    const {imageUrl, nome} = categorias
    return(
        <div className="card-container">
        <div className='background-image' style= {{backgroundImage: `url(${imageUrl})`}}
        />
        <div className="minor-container">
          <h2>{nome}</h2>
          <p>Compre agora!</p>
        </div>
      </div>
    )
}

export default CardContainer