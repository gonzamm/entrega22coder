import React from "react";

const List = ({ colors }) => {
  //console.log("ELEMENTO " + colors);
  return (
    <div>
      <ul>
        {colors.map((element) => {
          return (
            <li key={Math.random()} style={{ color: element }}>
              {element}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
