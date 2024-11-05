import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">ATP Equipments</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link text-white" to={"/"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={"/products/all"}>All products</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Brands
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to={'/brand/1'}>Wilson</Link></li>
                  <li><Link className="dropdown-item" to={'/brand/2'}>Head</Link></li>
                  <li><Link className="dropdown-item" to={'/brand/3'}>Babolat</Link></li>
                  <li><Link className="dropdown-item" to={'/brand/4'}>Yonex</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={"/login"}>Login</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
}

export default Navbar