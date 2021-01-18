import React from 'react';

const EditFishForm = (props) => (
  <div className="fish-edit">
    <input type="text" name="name" value={props.fish.name} />
    <input type="text" name="price" value={props.fish.price} />
    <select type="text" name="status" value={props.fish.status}>
      <option value="available">Fresh!</option>
      <option value="unavailable">Sold Out!</option>
    </select>
    <textarea name="desc" value={props.fish.desc} />
    <input type="text" value={props.fish.image} name="image" />
  </div>
);

export default EditFishForm;
