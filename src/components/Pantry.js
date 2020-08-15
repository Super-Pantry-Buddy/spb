import React from "react";
import FlexContainer from "./FlexContainer";
import { v4 as uuid } from "uuid";

const Pantry = ({ items }) => (
    <FlexContainer
        children={
            items
                ? items.map((item) => (
                      <div
                          key={uuid()}
                          className="tag is-medium"
                          style={{ margin: "0.2em" }}>
                          {item}
                      </div>
                  ))
                : null
        }
    />
);

export default Pantry;
