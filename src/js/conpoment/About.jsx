import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  slide(e) {
    let about = document.querySelector(".about");
    if (about !== undefined) {
      about.style.transform = "translateX(0vw)";
      document.body.style.overflow = "hidden";
      if (window.innerWidth <= 500) {
        document.querySelector(".reslide").click();
      }
    }
  }

  reSlide() {
    let about = document.querySelector(".about");
    if (about !== undefined) {
      about.style.transform = "translateY(-300vw)";
      document.body.style.overflow = "hidden";
      document.body.style.overflowY = "scroll";
    }
  }

  about(e) {
    if (e === undefined) {
      return 0;
    } else {
      if (e.type === "click") {
        this.slide();
      }
    }
  }
  render() {
    this.about(this.props.about);
    return (
      <div className='about'>
        <div className="btnExit" onClick={this.reSlide}>
          exit
        </div>
        <div className="about__desc">
          <h1 className="about__desc--title">sylla ibrahim</h1>
          <p className="about__desc--details">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
            sequi tempora modi ullam id, praesentium, reprehenderit minus
            voluptas deleniti repudiandae facilis debitis perspiciatis. In unde
            molestias sed nam porro neque!
          </p>
          <h1 className="about__desc--motive">your project my goal</h1>

          <p className="about__desc--contact">iblamerbeille@ddd</p>
        </div>
      </div>
    );
  }
}
