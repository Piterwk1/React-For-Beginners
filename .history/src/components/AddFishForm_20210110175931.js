import React from 'react';

class AddFishForm extends Component {
  AddFishForm = (e) => {
    e.preventDefault();
    console.log('making a fish');
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="price" placeholder="Price" />
        <select name="status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" placeholder="Desc" />
        <input type="text" name="image" placeholder="Image" />
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
