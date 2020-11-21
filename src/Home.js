import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import "./styles.css";

export function Home() {
  return (
    <>
      <div className="top-container">
        <h1>I'm Hovik Kantuni.</h1>
        <h2 className="title">a diecast car model collector.</h2>
        <img className="car" src="/images/car1.webp" alt="car-img" />
      </div>
      <div className="middle-container">
        <div className="profile">
          <img className="mypicture" src="/images/hk.webp" alt="hk pic" />

          <h2>Hello.</h2>
          <p className="intro">
            My collection consists of 800 models in scale of 1/43 and 150 models
            in scale of 1/18. I started collecting when I was 13 years old.
            Diecast model cars make the perfect collectible because they are
            very high quality and are made with detailed accuracy.
          </p>
        </div>
        <hr />
        <div className="skills">
          <h2>My collection.</h2>
          <div className="skill-row">
            <img className="picture18" src="/images/lx.webp" alt="118" />
            <Link className="scale-18-title" to="/large">
              1:18 Scale
            </Link>
            <p className="discriprion">
              Collecting car models is a fun way for automobile fans to collect
              versions of their own favorite dream cars. Today, one of the most
              popular ways of expressing one's enthusiasm for cars is collecting
              diecast car models in scale of 1:18.
            </p>
          </div>
          <div className="skill-row">
            <img className="picture43" src="/images/rr.webp" alt="143" />
            <Link className="scale-43-title" to="/small">
              1:43 Scale
            </Link>
            <p className="discriprion">
              The most popular size diecast model car is the 1:43. Experienced
              collectors of diecast vehicles recommend only collecting model
              cars that you really love and from brands which have good quality
              because their value appreciates over time.
            </p>
          </div>
        </div>
        <div>
          <hr className="bottom-line" />
        </div>
        <div className="contact-me">
          <h3>Get In Touch</h3>
          <h4>
            Collecting model cars is a rewarding and meaningful hobby that is
            enjoyed by people all over the world.
          </h4>
          <h4>If you are into trading car models, let's get in touch.</h4>
          <a href="mailto:hkantuni@gmail.com" className="btn btn-sm">
            CONTACT ME
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
