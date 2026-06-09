import React from "react";
import elephant from "../assets/elelphent.png";

export default function Hero() {
  return (
    <>
      <hr />

      <section className="hero">

        {/* Left Side */}
        <div className="hero-left">
          <h1>Riya Art Palace</h1>

          <h4>
            The Art of Rajasthan,
            <br />
            Refined for the Modern Home
          </h4>
        </div>

        {/* Center Image */}
        <div className="hero-center">
          <img src={elephant} alt="elephant" />
        </div>

        {/* Right Side */}
        <div className="hero-content">
          <h3>
            Authentic Handmade Décor Crafted In Jaipur Since 1995
          </h3>

          <p>
            From The Workshops Of Jaipur To Homes And Collections Across
            The Globe We Craft More Than Décor We Preserve A Living Heritage.
            Every Puppet, Every Hanging, Every Handmade Piece Carries Thirty
            Years Of Artisan Dedication And The Timeless Beauty Of Indian
            Craftsmanship.
          </p>

          <button>Explore Collection</button>
        </div>

      </section>
    </>
  );
}