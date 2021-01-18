import React from 'react';

const EditFishForm = (props) => {
  const handleChange = (e) => {
    console.log(e.currentTarget.name);
    const updatedFish = {
      ...props.fish,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    props.updateFish(props.index, updatedFish);
  };
  return (
    <div className="fish-edit">
      <input
        type="text"
        name="name"
        onChange={(e) => handleChange(e)}
        value={props.fish.name}
      />
      <input
        type="text"
        name="price"
        onChange={(e) => handleChange(e)}
        value={props.fish.price}
      />
      <select
        type="text"
        name="status"
        onChange={(e) => handleChange(e)}
        value={props.fish.status}
      >
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea
        name="desc"
        onChange={(e) => handleChange(e)}
        value={props.fish.desc}
      />
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        value={props.fish.image}
        name="image"
      />
      <button onClick={() => props.deleteFish(props.index)} onClick={() => props.deleteOrder(props.index)>Remove Fish</button>
    </div>
  );
};

export default EditFishForm;
