import React from "react";
import "../Home/Home.css";
import About from "../About/About";
import Department from "../Department/Department";
import Contact from "../Contact/Contact";

function Home() {
  return (
    <>
      <section className="home">
        <img
          className="home-img"
          src="https://www.sooriyahospital.com/images1/Banner-New-4.png"
          alt=""
        />
        <div className="main">
          <h1 className="heading">Heaven Care </h1>
          <p className="head2">
            Making the decision to have a child is momentous...
          </p>
        </div>
      </section>
      <About />
      <Department />
      <Contact />
    </>
  );
}

export default Home;
