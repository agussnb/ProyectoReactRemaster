import {Link} from 'react-router-dom'

const BrandsDisplay = ()=> {
    return (
      <div className="container">
        <div>
            <br />
          <h3>We work with brands:</h3>
          <br />
          <div className="card-group">
            <div className="card brandCards">
              <img src="/images/wilsonLogo.png" className="card-img-top brandCardImg" alt="wilsonLogo" />
              <div className="card-body">
                <h5 className="card-title">Wilson Products</h5>
                <p className="card-text">
                Racquets, ball tubes, strings and more!
                </p>
               <Link className='btn checkOutBrands' to={'/brand/1'}>Check Out</Link>
              </div>
            </div>
            <div className="card brandCards">
              <img src="/images/headLogo.png" className="card-img-top brandCardImg" alt="headLogo" />
              <div className="card-body">
                <h5 className="card-title">Head Products</h5>
                <p className="card-text">
                  Racquets, ball tubes, strings and more!
                </p>
                <Link className='btn checkOutBrands' to={'/brand/2'}>Check Out</Link>
              </div>
            </div>
            <div className="card brandCards">
              <img src="/images/BabolatLogo.png" className="card-img-top brandCardImg" alt="babolatLogo" />
              <div className="card-body">
                <h5 className="card-title">Babolat Products</h5>
                <p className="card-text">
                Racquets, ball tubes, strings and more!
                </p>
                <Link className='btn checkOutBrands' to={'/brand/3'}>Check Out</Link>
              </div>
            </div>
            <div className="card brandCards">
              <img src="/images/YonexLogo.png" className="card-img-top brandCardImg" alt="yonexLogo" />
              <div className="card-body">
                <h5 className="card-title">Yonex Products</h5>
                <p className="card-text">
                Racquets, ball tubes, strings and more!
                </p>
                <Link className='btn checkOutBrands' to={'/brand/4'}>Check Out</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default BrandsDisplay