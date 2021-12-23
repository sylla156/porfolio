import React, { Component } from "react";

export default class Project extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <main className="project" id="project">
        <h1 className="project__title">my project</h1>
        <div className="project__first" >
          <h2 className="project__first--title">e-commerce</h2>
          <div className="project__first--desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis fugit autem minus. Est sapiente corrupti, veritatis
            ducimus nihil commodi nobis unde! Impedit quaerat ut autem, possimus
            labore dolorum! Nihil, pariatur?
          </div>

          <div className="project__first--img">
          </div>
        
        </div>
      </main>
    );
  }
}
