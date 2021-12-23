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
            <p className="skill__element--front--skill">html</p>
            <p className="skill__element--front--skill">html</p>
            <p className="skill__element--front--skill">html</p>
            <p className="skill__element--front--skill">html</p>
            <p className="skill__element--front--skill">html</p>
            <p className="skill__element--front--skill">html</p>
            <p className="skill__element--front--skill">html</p>
          </div>
          <div className="skill__element--back">
            <h2 className="skill__element--front--title">back-end</h2>
            <p className="skill__element--back--skill">nodejs</p>
            <p className="skill__element--back--skill">nodejs</p>
            <p className="skill__element--back--skill">nodejs</p>
            <p className="skill__element--back--skill">nodejs</p>
            <p className="skill__element--back--skill">nodejs</p>
            <p className="skill__element--back--skill">nodejs</p>
            <p className="skill__element--back--skill">nodejs</p>

          </div>
        </div>
      </div>
    );
  }
}
