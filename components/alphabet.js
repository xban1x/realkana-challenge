import React, { Component, Fragment } from "react";
import SylabbleGroup from "./sylabbleGroup";

export default class Alphabet extends Component {
  render() {
    return (
      <Fragment>
        <div className="table">
          {this.props.alphabet.groups.map((group, index) => (
            <SylabbleGroup group={group} key={index} />
          ))}
        </div>
        <style jsx>
          {`
            .table {
              display: flex;
              flex-direction: row;
            }
            .group {
              width: 50px;
              display: flex;
              flex-direction: column;
            }
            .sylabble {
              min-height: 50px;
              height: 50px;
            }
            p {
              margin: 0;
            }
          `}
        </style>
      </Fragment>
    );
  }
}
