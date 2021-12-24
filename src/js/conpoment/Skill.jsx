import React, { Component } from "react";

export default class Skill extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="skill">
        <h1 className="skill__title">my skill</h1>
        <div className="skill__element">
          <div className="skill__element--front">
            <h2 className="skill__element--front--title">front-end</h2>
            <p className="skill__element--front--skill" data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">html</p>
            <p className="skill__element--front--skill"data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">css</p>
            <p className="skill__element--front--skill"data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">javascript</p>
            <p className="skill__element--front--skill"data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">react</p>
            <p className="skill__element--front--skill"data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">bootstrap</p>
            <p className="skill__element--front--skill"data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">scss</p>
            <p className="skill__element--front--skill"data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">less</p>
          </div>
          <div className="skill__element--back">
            <h2 className="skill__element--front--title">back-end</h2>
            <p className="skill__element--back--skill"data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">nodejs</p>
            <p className="skill__element--back--skill"data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">laravel</p>
            <p className="skill__element--back--skill"data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">nextjs</p>
            <p className="skill__element--back--skill"data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">mysql</p>
            <p className="skill__element--back--skill"data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">uml</p>
            <p className="skill__element--back--skill"data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">merise</p>
            <p className="skill__element--back--skill"data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">mongodb</p>
          </div>
        </div>
      </div>
    );
  }
}
