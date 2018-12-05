import React, { Component, Fragment } from "react";
import { observer } from "mobx-react";
import SylabbleGroup from "./sylabbleGroup";
import { IAlphabetProps } from "models/alphabet";

class Alphabet extends Component<IAlphabetProps> {
  render() {
    return (
      <Fragment>
        <div className="table">
          {this.props.alphabet.groups.map((group, index) => (
            <div className="group" key={index}>
              <SylabbleGroup group={group} />
            </div>
          ))}
        </div>
        <style jsx>
          {`
            div.table {
              display: flex;
              flex-direction: row;
            }
            div.group {
              border-left: 1px solid #e3e3e3;
              border-right: 1px soid #e3e3e3;
            }
          `}
        </style>
      </Fragment>
    );
  }
}

export default observer(Alphabet);
