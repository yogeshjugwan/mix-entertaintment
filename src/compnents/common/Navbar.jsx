import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header id="gen-header" className="gen-header-style-1 gen-has-sticky">
        <div className="gen-bottom-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <Link className="navbar-brand" to="/">
                    <img
                      className="img-fluid logo"
                      src="images/logo-1.png"
                      alt="streamlab-image"
                    />
                  </Link>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <div
                      id="gen-menu-contain"
                      className="gen-menu-contain"
                    ></div>
                  </div>
                  <div className="gen-header-info-box">
                    <div className="gen-account-holder"></div>
                    <div className="gen-btn-container">
                      <Link to="/" className="gen-button">
                        <div className="gen-button-block">
                          {/* <span className="gen-button-line-left" /> */}
                          <span className="gen-button-text">Subscribe</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  {/* <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="fas fa-bars" />
                  </button> */}
                   <Link to="register" className="" style={{display:'none'}}>
                        <div className="gen-button-block">
                          {/* <span className="gen-button-line-left" /> */}
                          <span className="gen-button-text">Sub</span>
                        </div>
                      </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
