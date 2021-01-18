import React from 'react';

const AddFishForm = () => (
  <form className="fish-edit">
    <input type="text" name="name" placeholder="Name" />
    <input type="text" name="price" placeholder="Price" />
    <select type="text" name="status" placeholder="Status" />
    <textarea name="desc" placeholder="Desc" />
    <input type="text" name="image" placeholder="Image" />
    <button type="submit">+ Add Fish</button>
  </form>
);

export default AddFishForm;
