import React from 'react'

const Movies = () => {
  return (
    <><section className="gen-section-padding-3">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="gen-carousel-movies-style-1 movie-grid style-1">
                <div className="gen-movie-contain">
                  <div className="gen-movie-img">
                    <img src="images/background/asset-5.jpeg" alt="streamlab-image" />
                    <div className="gen-movie-add">
                      <div className="wpulike wpulike-heart ">
                        <div className="wp_ulike_general_class">
                          <a href="#" className="sl-button"><i className="far fa-heart" /></a>
                        </div>
                      </div>
                      <ul className="menu bottomRight">
                        <li className="share top">
                          <i className="fa fa-share-alt" />
                          <ul className="submenu">
                            <li><a href="#" className="facebook"><i className="fab fa-facebook-f" /></a>
                            </li>
                            <li><a href="#" className="facebook"><i className="fab fa-instagram" /></a>
                            </li>
                            <li><a href="#" className="facebook"><i className="fab fa-twitter" /></a></li>
                          </ul>
                        </li>
                      </ul>
                      <div className="movie-actions--link_add-to-playlist dropdown">
                        <a className="dropdown-toggle" href="#"><i className="fa fa-plus" /></a>
                        <div className="dropdown-menu mCustomScrollbar">
                          <div className="mCustomScrollBox">
                            <div className="mCSB_container">
                              <a className="login-link" href="#">Sign
                                in to add this movie to a playlist.</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="gen-movie-action">
                      <a href="movie" className="gen-button">
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                  <div className="gen-info-contain">
                    <div className="gen-movie-info">
                      <h3><a href="movie">The
                          warrior life</a></h3>
                    </div>
                    <div className="gen-movie-meta-holder">
                      <ul>
                        <li>2hr 00mins</li>
                        <li>
                          <a href="action.html"><span>Action</span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      
      </div>
    </div>
  </section>
  </>
  )
}

export default Movies