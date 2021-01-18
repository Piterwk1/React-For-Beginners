import React from 'react';

const EditFishForm = (props) => (
  <div className="fish-edit">
    <input
      type="text"
      name="name"
      onChange={this.handleChange}
      value={props.fish.name}
    />
    <input
      type="text"
      name="price"
      onChange={this.handleChange}
      value={props.fish.price}
    />
    <select
      type="text"
      name="status"
      onChange={this.handleChange}
      value={props.fish.status}
    >
      <option value="available">Fresh!</option>
      <option value="unavailable">Sold Out!</option>
    </select>
    <textarea
      name="desc"
      onChange={this.handleChange}
      value={props.fish.desc}
    />
    <input
      type="text"
      onChange={this.handleChange}
      value={props.fish.image}
      name="image"
    />
  </div>
);

export default EditFishForm;
