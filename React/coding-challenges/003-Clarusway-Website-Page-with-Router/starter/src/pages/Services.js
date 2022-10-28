import React from "react";

const Services = () => {
  return (
    <div className="root">
      {/* use Subscribe component here */}

      <section id="main">
        <div className="container">
          <article id="main-col">
            <h1 className="page-title">Services</h1>
            <ul id="services">
              <li>
                <h3>Website Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus mi augue, viverra sit amet ultricies at, vulputate id
                  lorem. Nulla facilisi.
                </p>
                <p>Pricing: $1,000 - $3,000</p>
              </li>
              <li>
                <h3>Website Maintenance</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus mi augue, viverra sit amet ultricies at, vulputate id
                  lorem. Nulla facilisi.
                </p>
                <p>Pricing: $250 per month</p>
              </li>
              <li>
                <h3>Website Hosting</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus mi augue, viverra sit amet ultricies at, vulputate id
                  lorem. Nulla facilisi.
                </p>
                <p>Pricing: $25 per month</p>
              </li>
            </ul>
          </article>

          <aside id="sidebar">
            <div className="dark">
              <h3>Get A Quote</h3>
              <form className="quote">
                <div>
                  <label>Name</label>
                  <br />
                  <input type="text" placeholder="Name" />
                </div>
                <div>
                  <label>Email</label>
                  <br />
                  <input type="email" placeholder="Email Address" />
                </div>
                <div>
                  <label>Message</label>
                  <br />
                  <textarea placeholder="Message"></textarea>
                </div>
                <button className="button_1" type="submit">
                  Send
                </button>
              </form>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Services;
