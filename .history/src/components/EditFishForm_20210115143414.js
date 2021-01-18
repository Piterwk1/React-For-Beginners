import React from 'react';

const EditFishForm = (props) => (
const handleChange = (e) => {
console.log(e);
}

  <div className="fish-edit">
    <input
      type="text"
      name="name"
      onChange={() => handleChange(e)}
      value={props.fish.name}
    />
    <input
      type="text"
      name="price"
      onChange={() => handleChange(e)}
      value={props.fish.price}
    />
    <select
      type="text"
      name="status"
      onChange={() => handleChange(e)}
      value={props.fish.status}
    >
      <option value="available">Fresh!</option>
      <option value="unavailable">Sold Out!</option>
    </select>
    <textarea
      name="desc"
      onChange={() => handleChange(e)}
      value={props.fish.desc}
    />
    <input
      type="text"
      onChange={() => handleChange(e)}
      value={props.fish.image}
      name="image"
    />
  </div>
);

export default EditFishForm;
