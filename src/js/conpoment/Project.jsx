import React, { Component } from "react";

export default class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="project" id="project">
        <h1 className="project__title">my project</h1>
        <div className="project__first">
          <h2 className="project__first--title">e-commerce</h2>
          <div className="project__first--desc" data-scroll data-scroll-speed="1" data-scroll-direction='horizontal' >
            this project this famous project was the project that allowed me to
            awaken my passion as a web developer as a software engineer for
            become a full-stack developer
          </div>

          <div className="project__first--img" data-scroll data-scroll-speed="-3" ></div>
        </div>
      </main>
    );
  }
}
