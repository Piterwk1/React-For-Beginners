import React from 'react';

const EditFishForm = (props) => (
const handleChange = (e) => {
console.log(e);
}

  <div className="fish-edit">
    <input
      type="text"
      name="name"
      onChange={() => handleChange()}
      value={props.fish.name}
    />
    <input
      type="text"
      name="price"
      onChange={() => handleChange()}
      value={props.fish.price}
    />
    <select
      type="text"
      name="status"
      onChange={() => handleChange()}
      value={props.fish.status}
    >
      <option value="available">Fresh!</option>
      <option value="unavailable">Sold Out!</option>
    </select>
    <textarea
      name="desc"
      onChange={() => handleChange()}
      value={props.fish.desc}
    />
    <input
      type="text"
      onChange={() => handleChange()}
      value={props.fish.image}
      name="image"
    />
  </div>
);

export default EditFishForm;
