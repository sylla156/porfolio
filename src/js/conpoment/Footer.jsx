import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <p className="hr"></p>
        <div className="footer">
          <nav className="footer__nav">
            <p className="footer__nav--element">
              <a href="">Facebook</a>
            </p>
            <p className="footer__nav--element">
              <a href="">instagram</a>
            </p>
            <p className="footer__nav--element">
              <a href="">linkedin</a>
            </p>
            <p className="footer__nav--element">
              <a href="">codepen</a>
            </p>
            <p className="footer__nav--element">
              <a href="">Github</a>
            </p>
          </nav>
        </div>
      </>
    );
  }
}
