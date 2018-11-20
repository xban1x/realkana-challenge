import React, { Component, Fragment } from "react";

export default class AlphabetTable extends Component {
  render() {
    return (
      <Fragment>
        <div className="table">
          {this.props.alphabet.groups.map((group, index) => (
            <div className="group" key={index}>
              {group.sylabbles.map((sylabble, index) =>
                sylabble.word ? (
                  <div className="sylabble" key={index}>
                    <p>{sylabble.sylabble}</p>
                    <p>{sylabble.word}</p>
                  </div>
                ) : (
                  <div className="sylabble" key={index} />
                )
              )}
              <div>
                <input
                  type="checkbox"
                  value={group.checked}
                  checked={group.checked}
                  onChange={() => this.props.onSelect(index)}
                />
              </div>
            </div>
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
