import React from 'react';

const EditFishForm = (props) => (
  <div className="fish-edit">
    <input type="text" name="name" ref={this.nameRef} />
    <input type="text" name="price" ref={this.priceRef} />
    <select name="status" ref={this.statusRef}>
      <option value="available">Fresh!</option>
      <option value="unavailable">Sold Out!</option>
    </select>
    <textarea name="desc" ref={this.descRef} />
    <input type="text" ref={this.imageRef} name="image" />
  </div>
);

export default EditFishForm;
