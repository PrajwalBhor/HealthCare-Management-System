import React, { useState } from 'react';

const ManageServices = ({ services, onDelete, onUpdate }) => {
  // State to track the service being edited
  const [editingServiceId, setEditingServiceId] = useState(null);
  const [editedService, setEditedService] = useState({
    name: '',
    description: '',
    price: ''
  });

  // Function to start editing
  const startEditing = (service) => {
    setEditingServiceId(service.id);
    setEditedService({ name: service.name, description: service.description, price: service.price });
  };

  // Function to handle the form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedService((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Function to submit the edited service
  const handleSubmit = (e, id) => {
    e.preventDefault();
    onUpdate(id, editedService);
    setEditingServiceId(null);  // Exit edit mode after submitting
  };

  return (
    <div>
      <h2 className='heading'>Manage Services</h2>
      <ul className='item-list'>
        {services.map((service) => (
          <li key={service.id}>
            {editingServiceId === service.id ? (
              // Edit form for the selected service
              <form onSubmit={(e) => handleSubmit(e, service.id)}>

                <div>
                  <label>Service Name</label>
                  <input
                    type="text"
                    name="name"
                    value={editedService.name}
                    onChange={handleChange}
                    placeholder="Enter service name"
                  />
                </div>

                <div>
                  <label>Description</label>
                  <textarea
                    className="description-box"
                    name="description"
                    value={editedService.description}
                    onChange={handleChange}
                    placeholder="Enter service description"
                    rows="5"   // Shows a maximum of 5 lines
                    maxLength="500"  // Limits character count (optional)
                  />
                </div>

                <div>
                  <label>Price</label>
                  <input
                    type="number"
                    name="price"
                    value={editedService.price}
                    onChange={handleChange}
                    placeholder="Enter price"
                  />
                </div>
                <div className='buttons-edit-delete'>
                  <button type="submit">Save</button>
                  <button className='button-cancel' type="button" onClick={() => setEditingServiceId(null)}>Cancel</button>
                </div>

              </form>
            ) : (
              // Display the service details
              <div>
                <h3>{service.name}</h3>
                {/* <h6>Description: </h6> */}
                <p>Description: {service.description}</p>
                <p>Price: ${service.price}</p>

                <div className='buttons-edit-delete'>
                  <button onClick={() => startEditing(service)}>Update</button>
                  <button onClick={() => onDelete(service.id)}>Delete</button>
                </div>

              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageServices;
