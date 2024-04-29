import React from "react";

function Suggestions({ data, handleClick2 }) {
  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => (
            <li onClick={handleClick2} key={index}>
              {item}
            </li>
          ))
        : null}
    </ul>
  );
}

export default Suggestions;
