import React from 'react';

const EditFishForm = () => (
  <div className="fish-edit">
    <input type="text" name="name" ref={this.nameRef} placeholder="Name" />
    <input type="text" name="price" ref={this.priceRef} placeholder="Price" />
    <select name="status" ref={this.statusRef}>
      <option value="available">Fresh!</option>
      <option value="unavailable">Sold Out!</option>
    </select>
    <textarea name="desc" ref={this.descRef} placeholder="Desc" />
    <input type="text" ref={this.imageRef} name="image" placeholder="Image" />
  </div>
);

export default EditFishForm;
