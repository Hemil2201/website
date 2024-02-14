import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side justify-content-center flex-column align-items-start">
              <h1 className="display-2">Online Payment Made easy for you</h1>
              <p className="main-hero-para">
                .navbar li and .navbar li a into .navbar-nav li and .navbar-nav
                li a, respectively, since they belong to the same navigation
                list.
              </p>
              <h3>Get early access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-75 me-3 p-2 form-control-text"
                />
                <div className="input-group-text">Get it now</div>
              </div>
            </div>
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center">
              <img src="./logo512.png" alt="heroimg" className="img-fluid" />
              <img src="./logo192.png" alt="heroimg" className="img-fluid" />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
