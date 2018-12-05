import React, { Component, Fragment, HTMLAttributes } from "react";
import { ISylabbleProps } from "models/sylabble";

export default class Sylabble extends Component<
  ISylabbleProps & HTMLAttributes<HTMLDivElement>
> {
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
