import React from "react";
import './Home.css';

import './css/bootstrap.min.css'
import './css/agency.min.css'

function Home() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top"></a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#team">Team</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="heading-dstore" > DE STORAGE </div>
        <div className="intro-heading-text-uppercase">DECENTRALISED SECURE STORAGE</div>
        <a id="btn1" className="btn-three btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="/authenticate">Get Started</a>
      </div>
    </div>
  </header>

  
  <section className="bg-light page-section" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          <br/><br/>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={require('./img/team/Amudhini.jpeg')} alt=""/>
            <h4>M JAI KIRAN</h4>
            <br/>
            <h4>AM.EN.U4CSE18133</h4>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={require('./img/team/Amudhini.jpeg')} alt=""/>
            <h4>N ROHITH</h4>
            <br/>
            <h4>AM.EN.U4CSE18139</h4>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={require('./img/team/Amudhini.jpeg')} alt=""/>
            <h4>V KALYAN</h4>
            <br/>
            <h4>AM.EN.U4CSE18163</h4>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={require('./img/team/prem.webp')} alt=""/>
            <h4>S PREM KUMAR</h4>
            <br/>
            <h4>AM.EN.U4CSE18506</h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large text-muted">Students of AMRITA VISHWA VIDYAPEETHAM, AMRITAPURI</p>
        </div>
      </div>
    </div>
  </section>

  <footer className="footer">
    <div className="container">
    <span className="copyright">Copyright &copy; De Storage 2022</span>
    </div>
  </footer>
    </div>
  );
}

export default Home;