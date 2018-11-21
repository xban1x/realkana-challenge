import React, { Component, Fragment } from "react";
import Sylabble from "./sylabble";

export default class SylabbleGroup extends Component {
  render() {
    const group = this.props.group;
    return (
      <Fragment>
        <div className="group">
          {group.sylabbles.map((sylabble, index) => (
            <Sylabble className="sylabble" sylabble={sylabble} key={index} />
          ))}
          <input
            type="checkbox"
            value={group.selected}
            onChange={group.toggleSelect}
          />
        </div>
        <style jsx>
          {`
            .group {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
          `}
        </style>
      </Fragment>
    );
  }
}
