import React from 'react'
export default function Navbar(props) {
  return (
      <>
  <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand p-3" href="#Home"><img src="./img/logo.png" alt="logo" draggable="false"/></a>
        <button className="navbar-toggler ms-auto bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active fs-6 fw-bolder" aria-current="page" href="!#">{props.title}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-6 fw-bolder" href="#about">{props.about}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-6 fw-bolder" href="#clasess">clasess</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-6 fw-bolder" href="#service">service</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-6 fw-bolder" href="#pages">pages</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-6 fw-bolder" href="#contact">contact</a>
            </li>
          </ul>
        </div>
        <div className="shaer d-flex xp-3">
          <div className="icon p-3">
            <i className="bi bi-facebook"></i>
          </div>

          <div className="icon p-3">
            <i className="bi bi-instagram"></i>
          </div>

          <div className="icon p-3">
            <i className="bi bi-twitter"></i>
          </div>
        </div>
      </div>
    </nav>
      </>
  )
}
