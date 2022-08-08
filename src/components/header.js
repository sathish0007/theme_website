import React from "react";

export default function Header() {
  return (
    <nav class="navbar  navbar-expand-lg py-3 navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand no-hvr-link" href="#">
          <img src={require("./logo-light.png")} class="img-fluid" alt="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a
                class="nav-link no-hvr-link active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link no-hvr-link" href="#">
                Order Now
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link no-hvr-link" href="#">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
