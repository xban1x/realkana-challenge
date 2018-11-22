import React, { Component, Fragment } from "react";
import { observer } from "mobx-react";
import Sylabble from "./sylabble";
import { ISylabbleGroupProps } from "./../models/sylabbleGroup";

class SylabbleGroup extends Component<ISylabbleGroupProps> {
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
            value={group.selected as any}
            checked={group.selected}
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

export default observer(SylabbleGroup);
