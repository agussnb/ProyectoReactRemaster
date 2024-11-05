import React from "react";
import { Link } from "react-router-dom";

const Brands = ({ data }) => {
  return (
    <div className="brandsDiv">
    <br />
    <div className='card productsCard'>
    <img className='card-img-top' src="/images/testimg.png" alt={data.title} />
    {/* <img className='card-img-top' src={`/imagenes/${data.id}.jpg`} alt={data.title} /> Cuando haya imagenes se usara esta linea */}
    <div className='card-body'>
        <h5 className='card-title'>{data.title}</h5>
        <p className='card-text'><strong>Precio:</strong> ${data.price}</p>
        <Link className='btn card-details-button' to={`/product/${data.id}`}>Details</Link>
    </div>
</div>
</div>
  );
};

export default Brands;
