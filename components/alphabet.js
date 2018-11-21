import React, { Component, Fragment } from "react";
import { observer } from "mobx-react";
import SylabbleGroup from "./sylabbleGroup";

export default observer(
  class Alphabet extends Component {
    render() {
      const alphabet = this.props.alphabet;
      return (
        <Fragment>
          {alphabet ? (
            <div>
              {alphabet.groups.map((group, index) => (
                <SylabbleGroup group={group} key={index} />
              ))}
            </div>
          ) : (
            <div>Alphabet not found.</div>
          )}
          <style jsx>
            {`
              div {
                display: flex;
                flex-direction: row;
              }
            `}
          </style>
        </Fragment>
      );
    }
  }
);
