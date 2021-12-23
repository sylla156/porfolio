import React, { Component } from "react";

export default class Skill extends Component {
  constructor(props) {
    super(props);
    this.progress = this.progress.bind(this);
    this.clean = this.clean.bind(this);
  }

  progress() {
    let progresses = document.querySelectorAll(
      ".skill__element--child--progress-child"
    );

    progresses.forEach((progress) => {
      let value = progress.getAttribute("data-progress");
      progress.style.width = value + "%";
    });
  }

  clean() {
    let progresses = document.querySelectorAll(
      ".skill__element--child--progress-child"
    );

    progresses.forEach((progress) => {
      progress.style.width = 0 + "%";
    });
  }

  render() {
    return (
      <div className="skill">
        <h1 className="skill__title">my skill</h1>
        <div
          className="skill__element"
          onMouseOver={this.progress}
          onMouseOut={this.clean}
        >
          <div className="skill__element--child">
            <h3 className="skill__element--child--title">html</h3>
            <p className="skill__element--child--progress">
              <p
                className="skill__element--child--progress-child"
                data-progress="50"
              >
                <span>ss</span>
              </p>
            </p>
          </div>

          <div className="skill__element--child">
            <h3 className="skill__element--child--title">html</h3>
            <p className="skill__element--child--progress">
              <p
                className="skill__element--child--progress-child"
                data-progress="80"
              >
                <span>ss</span>
              </p>
            </p>
          </div>

          <div className="skill__element--child">
            <h3 className="skill__element--child--title">html</h3>
            <p className="skill__element--child--progress">
              <p
                className="skill__element--child--progress-child"
                data-progress="20"
              >
                <span>ss</span>
              </p>
            </p>
          </div>

          <div className="skill__element--child">
            <h3 className="skill__element--child--title">html</h3>
            <p className="skill__element--child--progress">
              <p
                className="skill__element--child--progress-child"
                data-progress="80"
              >
                <span>ss</span>
              </p>
            </p>
          </div>

          <div className="skill__element--child">
            <h3 className="skill__element--child--title">html</h3>
            <p className="skill__element--child--progress">
              <p
                className="skill__element--child--progress-child"
                data-progress="90"
              >
                <span>ss</span>
              </p>
            </p>
          </div>

          <div className="skill__element--child">
            <h3 className="skill__element--child--title">html</h3>
            <p className="skill__element--child--progress">
              <p
                className="skill__element--child--progress-child"
                data-progress="25"
              >
                <span>ss</span>
              </p>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
