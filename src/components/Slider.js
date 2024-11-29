import React from "react";
import "./Slider.css";

import loga from '../assets/img/sl-1.jpg';
import logo from '../assets/img/sl-2.jpg';
import log from '../assets/img/sl-3.jpg';
import loge from '../assets/img/sl-4.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function Slider()
{
    return(
        <div>
           
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={loga} class="d-block w-100" alt="Slide 1" />
    </div>
    <div class="carousel-item">
      <img src={logo} class="d-block w-100" alt="Slide 2" />
    </div>
    <div class="carousel-item">
      <img src={log} class="d-block w-100" alt="Slide 3" />
    </div>
    <div class="carousel-item">
      <img src={loge} class="d-block w-100" alt="Slide 4" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}