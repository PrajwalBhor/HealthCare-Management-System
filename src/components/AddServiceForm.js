import React, { useState } from 'react';

const AddServiceForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !price) {
      alert('All fields are required!');
      return;
    }
    onAdd({ name, description, price });
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <div>
      <h2 className='heading'>Add Service</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Service Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter service name"
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            className="description-box"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter service description"
            rows="5"   // Shows a maximum of 5 lines
            maxLength="500"  // Limits character count (optional)
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
          />
        </div>
        <div className='buttons-edit-delete'>
          <button type="submit">Add Service</button>
        </div>
      </form>
    </div>
  );
};

export default AddServiceForm;
