const ItemDetail = ({ product }) => {
    return (
      <div className="itemDetail image-container">
        <input type="radio" id="slide1" name="slides" checked />
        <input type="radio" id="slide2" name="slides" />
        <div className="slider">
          <div className="slide slide1">
            <img className="img-fluid" src={`/images/${product.image}`} alt={product.id} />
          </div>
          <div className="slide slide2">
            <img className="img-fluid" src={`/images/${product.image2}`} alt={`${product.id}-alt`} />
          </div>
        </div>
        <div className="arrows">
          <label for="slide1" className="arrow arrow1">&#9679;</label>
          <label for="slide2" className="arrow arrow2">&#9679;</label>
        </div>
        <div className="container item-detail-container">
          <div className="p-4 border-rounded container-child">
            <h1 className="display-4">{product.title}</h1>
            <p className="lead-description">{product.description}</p>
            <p className="lead">Precio ${product.price}</p>
            <a className="btn btn-addToCart" href="/cart">Agregar al carrito</a>
            <p className="lead detail-stock">Stock disponible: {product.stock}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ItemDetail;
  


{/* <div className="itemDetail">
                <div className='card productsCard itemDetailCard'>
                    <img src={`/images/${product.image}`}alt={product.id}/> Esta linea se usara cuando haya imagenes
                    <img className='card-img-top' src="/images/testimg.png" alt={product.title} />
                    <br />
                    <h3 className='card-title'>{product.title}</h3>
                    <div className='card-body'>
                        <p className='card-text'>{product.description}</p>
                        <p className='card-text'>Precio ${product.price}</p>
                        <p className="card-text">Stock disponible: {product.stock}</p>
                    </div>
                </div>
            </div> */}

            