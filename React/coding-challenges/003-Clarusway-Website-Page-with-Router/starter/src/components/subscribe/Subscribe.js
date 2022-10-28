import React from "react";

const Subscribe = () => {
  return (
    <section id="newsletter">
      <div className="container">
        <h1>Subscribe To Our Newsletter</h1>
        <form>
          <input type="email" placeholder="Enter Email..." />
          <button type="submit" className="button_1">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
