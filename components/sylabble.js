import React, { Component, Fragment } from "react";

export default class Sylabble extends Component {
  render() {
    const sylabble = this.props.sylabble;
    return (
      <Fragment>
        {sylabble.word ? (
          <div>
            <p>{sylabble.character}</p>
            <p>{sylabble.word}</p>
          </div>
        ) : (
          <div />
        )}
        <style jsx>
          {`
            p {
              margin: 0;
            }
            div {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              width: 50px;
              height: 50px;
            }
          `}
        </style>
      </Fragment>
    );
  }
}
