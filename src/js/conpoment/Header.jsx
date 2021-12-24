import React, { Component } from "react";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.navOut = this.navOut.bind(this);
    this.navIn = this.navIn.bind(this);
    this.reload = this.reload.bind(this);
    this.contact = this.contact.bind(this);
    this.about = this.about.bind(this);
    this.project = this.project.bind(this);

  }

  navIn() {
    const btnIn = document.querySelector(".header__btnNav");
    const navbar = document.querySelector(".navbar");
    const navlink = document.querySelectorAll(".navLink");
    btnIn.classList.toggle("active");
    if (btnIn.classList.length === 2) {
      navbar.style.width = "0px";
      navlink.forEach((item) => {
        item.style.fontSize = "0em";
      });
    } else {
      navbar.style.width = "100vw";
      navlink.forEach((item) => {
        item.style.fontSize = "2em";
      });
      document.body.style.overflowY = "hidden";
    }
  }
  navOut() {
    document.body.style.overflowY = "scroll";

    const navbar = document.querySelector(".navbar");
    const navlink = document.querySelectorAll(".navLink");
    navbar.style.width = "0.001px";
    navlink.forEach((item) => {
      item.style.fontSize = "0em";
    });
  }
  contact(e){
    this.props.contact(e);
  }
  about(e){
    this.props.about(e);
  }

  project(e){
    e.preventDefault();
    this.navOut();
    setTimeout(() =>{

      document.querySelector('.projectClick').click();
    },500)
  }
  reload(){
    window.location.reload();
  }

  render() {
    return (
      <header className="header" id="up">
        <div className="header__first">
          <div className="header__first--title" onClick={this.reload}>sylla ibrahim</div>
          <nav className="header__first--nav">
            <p className="header__first--nav--element">
              <a href="#project" className='projectClick'>project</a>
            </p>
            <p className="header__first--nav--element">
              <a href="" onClick={this.about}>about</a>
            </p>
            <p className="header__first--nav--element">
              <a href="" onClick={this.contact}>contact</a>
            </p>
          </nav>
          <div className="header__btnNav active reslide" onClick={this.navIn}>
            <p className="header__btnNav--element"></p>
            <p className="header__btnNav--element"></p>
            <p className="header__btnNav--element"></p>
          </div>
        </div>

        <div className="header__second">
          <div className="header__second--element">
            <Typewriter
              words={[
                "hi, i am a software engineer specializing in full-stack web development.as I say your project my goal",
              ]}
              cursor
              cursorStyle="|"
              typeSpeed={100}
            />
          </div>
        </div>
        <div className="navbar">
          <div className="navbar__exit" onClick={this.navOut}>
            <p className="navbar__exit--element1"></p>
            
            <p className="navbar__exit--element2"></p>
          </div>
          <div className="navbar__link">
            <p className="navbar__link--element">
              <a className="navLink" href="/">
                accieul
              </a>
            </p>
            <p className="navbar__link--element">
              <a className="navLink" href="" onClick={this.project}>
                project
              </a>
            </p>
            <p className="navbar__link--element ">
              <a className="navLink" href="/"  onClick={this.about}>
                about
              </a>
            </p>
            <p className="navbar__link--element ">
              <a className="navLink" href="/"  onClick={this.contact}>
                contact
              </a>
            </p>
          </div>
        </div>
      </header>
    );
  }
}
