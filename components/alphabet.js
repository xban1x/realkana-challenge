import React, { Component, Fragment } from "react";
import { observer } from "mobx-react";
import SylabbleGroup from "./sylabbleGroup";

export default observer(
  class Alphabet extends Component {
    render() {
      return (
        <Fragment>
          <div>
            {this.props.alphabet.groups.map((group, index) => (
              <SylabbleGroup group={group} key={index} />
            ))}
          </div>
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
