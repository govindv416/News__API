import React from 'react'

export default function Contact() {
  return (
    <div>
    <section class="ourteam" id="ourteam">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="headng text-left">
            <h4 class="fw-bolder">OUR team</h4>
            <h2 class="fw-bolder text-black">TRAIN WITH EXPERTS</h2>
          </div>
        </div>
      </div>

      <div class="row">

        <div class="col-lg-4">
          <div class="card border-0 rounded-0">
            <img src="./img/team/team-1.jpg" class="card-img-top img-fluid" alt="..."/>
            <div class="card-body">
              <h2>Athart Rachel</h2>
              <h5 class="fs-5">Gym Traning</h5>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card border-0 rounded-0">
            <img src="./img/team/team-2.jpg" class="card-img-top img-fluid" alt="..."/>
            <div class="card-body">
              <h2>Athart Rachel</h2>
              <h5 class="fs-5">Gym Traning</h5>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card border-0 rounded-0">
            <img src="./img/team/team-3.jpg" class="card-img-top img-fluid" alt="..."/>
            <div class="card-body">
              <h2 class="fw-bolder">Athart Rachel</h2>
              <h5 class="fs-5 fw-bolder">Gym Traning</h5>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  
  <section class="contact" id="contact">
    <div class="container"> 
      <div class="row">
        <div class="headng text-center m-auto">
          <h4 class="fw-bolder">OUR contact</h4>
          <h2 class="fw-bolder text-white">WHAT WE CAN help</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label text-white">name</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="enter yor name"/>
            <label for="exampleFormControlInput1" class="form-label text-white">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label text-white">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <input value="send" class="btn text-center bg-warning text-light"/>
        </div>
      </div>
    </div>
  </section>

    </div>
  )
}
