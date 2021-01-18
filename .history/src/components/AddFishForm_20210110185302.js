import React, { Component } from 'react';

class AddFishForm extends React.Component {
  nameRef = React.createRef();

  priceRef = React.createRef();

  statusRef = React.createRef();

  descRef = React.createRef();

  imageRef = React.createRef();

  createFish = (e) => {
    e.preventDefault();
    const fish = {
      nameRef: this.nameRef.current.value,
      priceRef: parseFloat(this.priceRef.current.value),
      statusRef: this.statusRef.current.value,
      descRef: this.descRef.current.value,
      imageRef: this.imageRef.current.value,
    };
    this.props.addFish(fish);
    nameRef = '';
    priceRef = '';
    statusRef = '';
    descRef = '';
    imageRef = '';
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="text" name="name" ref={this.nameRef} placeholder="Name" />
        <input
          type="text"
          name="price"
          ref={this.priceRef}
          placeholder="Price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <input
          type="text"
          ref={this.imageRef}
          name="image"
          placeholder="Image"
        />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;

// const AddFishForm = () => {
//   function createFish() {
//     // e.preventDefault();
//     console.log('making a fish');
//   }

//   return (
//     <form className="fish-edit" onSubmit={createFish}>
//       <input type="text" name="name" placeholder="Name" />
//       <input type="text" name="price" placeholder="Price" />
//       <select name="status">
//         <option value="available">Fresh!</option>
//         <option value="unavailable">Sold Out!</option>
//       </select>
//       <textarea name="desc" placeholder="Desc" />
//       <input type="text" name="image" placeholder="Image" />
//       <button type="submit">+ Add Fish</button>
//     </form>
//   );
// };

// export default AddFishForm;
