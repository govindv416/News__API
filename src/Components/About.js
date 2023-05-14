import React from 'react'

export default function About() {
  return (
    <div>
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="headng text-center m-auto">
              <h4 className="fw-bolder">WHY CHOSE US?</h4>
              <h2 className="fw-bolder text-white">PUSH YOUR LIMITS FORWARD</h2>
            </div>
          </div>
        </div>

        <div className="row my-5 text-center">
          <div className="col-lg-3 col-sm-6">
            <div className="content">
              <i className="bi bi-boxes">1</i>
              <h5 className="text-white fw-bolder fs-5">Modern equipment</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="content">
              <i class="bi bi-apple">2</i>
              <h5 className="text-white fw-bolder fs-5">Healthy nutrition plan</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="content">
              <i class="bi bi-clipboard2-pulse-fill">3</i>
              <h5 className="text-white fw-bolder fs-6">Proffesponal training plan</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="content">
              <i className="bi bi-heart-pulse-fill">4</i>
              <h5 className="text-white fw-bolder fs-5">Unique to your needs</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

