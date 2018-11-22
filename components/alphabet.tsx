import React, { Component, Fragment } from "react";
import { observer } from "mobx-react";
import SylabbleGroup from "./sylabbleGroup";
import { IAlphabetProps } from "models/alphabet";

class Alphabet extends Component<IAlphabetProps> {
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

export default observer(Alphabet);
