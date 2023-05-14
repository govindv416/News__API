import React from 'react'

export default function Hearo() {
  return (
    <>
    <div>
      <div id="Home" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./img/hero/hero-1.jpg" className="w-100" alt="imag"/>
          <div className="content">
       
            <span className="shape text-white fw-bolder">shape your body</span>
            <h1 className="display-3 fw-semibold text-white text-uppercase"><strong>be <span className="orange">strong</span><br/> traning hard</strong></h1>
            <button className="btn-home">get info</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src="./img/hero/hero-2.jpg" className="w-100" alt="imag"/>
          <div className="content">
            <span className="shape text-white fw-bolder">shape your body</span>
            <h1 className="display-3 fw-semibold text-white text-uppercase"><strong>be <span className="orange">strong</span><br/> traning hard</strong></h1>
            <button className="btn-home">get info</button>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#Home" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#Home" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
    </>
  )
}
