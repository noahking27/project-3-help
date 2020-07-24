import React from "react";
const tags = [
  "Cafe",
  "Resteraunt",
  "Boutique",
  "Clothing",
  "Drive Thru",
  "Mechanic",
  "Salon",
  "Gym",
  "Entertainment",
  "Hobbies and Crafts",
  "Books and Music",
];

let divStyle = {
  "margin-right": "15px",
};

const Checkbox = (props) => {
  const tagList = tags.map(function (tag) {
    return (
      <div className="form-check" style={divStyle}>
        <input
          className="form-check-input tagCheckbox"
          type="checkbox"
          value={tag}
          id="defaultCheck1"
          {...props}
        />
        <label className="form-check-label" for="defaulCheck1">
          {tag}
        </label>
      </div>
    );
  });

  return <div className="row">{tagList}</div>;
};
export default Checkbox;
