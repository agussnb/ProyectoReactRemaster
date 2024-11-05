

const Carousel = () => {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <br />
    <div className="carousel-item active">
      <img src="images/wilsonCar2Img.png" className="CarouselImgWilson d-block mx-auto" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images/headCarImg.png" className="CarouselImgHead d-block mx-auto" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/images/babolatCarImg.png" className="CarouselImgBabolat d-block mx-auto" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/images/yonexCarImg.png" className="CarouselImgYonex d-block mx-auto" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
}

export default Carousel