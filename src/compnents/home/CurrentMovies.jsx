import React from "react";
const CurrentMovies = () => {
  return (
    <>
      <div
        className="gen-breadcrumb"
        style={{ backgroundImage: "url('images/background/asset-25.jpeg')" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav aria-label="breadcrumb">
                <div className="gen-breadcrumb-title">
                  <h1>Mix-Entertainment</h1>
                </div>
                <div className="gen-breadcrumb-container">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      {/* <Link to="/">
                        <i className="fas fa-home mr-2"></i>Home
                      </Link> */}
                    </li>
                    <li className="breadcrumb-item active">Movies/Series</li>
                  </ol>
                </div>
              </nav>
              <div className="gen-search-form">
                <form
                  role="search"
                  method="get"
                  className="search-form"
                  action="#"
                >
                  <label>
                    <span className="screen-reader-text" />
                    <input
                      type="search"
                      className="search-field"
                      placeholder="Search …"
                      // defaultValue
                      name="s"
                    />
                  </label>
                  <button type="submit" className="search-submit">
                    <span className="screen-reader-text" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentMovies;
