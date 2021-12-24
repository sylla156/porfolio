import React, { Component } from "react";

export default class Skill extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="skill" >
        <h1 className="skill__title">my skill</h1>
        <div className="skill__element" >
          <div className="skill__element--front" >
            <h2 className="skill__element--front--title">front-end</h2>
            <p className="skill__element--front--skill" >html</p>
            <p className="skill__element--front--skill">css</p>
            <p className="skill__element--front--skill">javascript</p>
            <p className="skill__element--front--skill">react</p>
            <p className="skill__element--front--skill">bootstrap</p>
            <p className="skill__element--front--skill">scss</p>
            <p className="skill__element--front--skill">less</p>
          </div>
          <div className="skill__element--back">
            <h2 className="skill__element--front--title">back-end</h2>
            <p className="skill__element--back--skill">nodejs</p>
            <p className="skill__element--back--skill">laravel</p>
            <p className="skill__element--back--skill">nextjs</p>
            <p className="skill__element--back--skill">mysql</p>
            <p className="skill__element--back--skill">uml</p>
            <p className="skill__element--back--skill">merise</p>
            <p className="skill__element--back--skill">mongodb</p>

          </div>
        </div>
      </div>
    );
  }
}
