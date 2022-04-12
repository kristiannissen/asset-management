/**
 *
 */
import React from "react";
import { ListItem } from ".";

const List = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <ListItem {...item} />
      ))}
    </div>
  );
};

export default List;
