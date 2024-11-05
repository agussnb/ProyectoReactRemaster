import {Link} from 'react-router-dom'
const Item = ({ product }) => {
    return (
        <div>
            <br />
            <div className='card productsCard'>
            <img className='card-img-top' src="/images/testimg.png" alt={product.title} />
            {/* <img className='card-img-top' src={`/imagenes/${product.id}.jpg`} alt={product.title} /> Cuando haya imagenes se usara esta linea */}
            <div className='card-body'>
                <h5 className='card-title'>{product.title}</h5>
                <p className='card-text'><strong>Precio:</strong> ${product.price}</p>
                <Link className='btn allItemsCardDetail-button' to={`/product/${product.id}`}>Details</Link>
            </div>
        </div>
        </div>
    );
};

export default Item;
