import React from 'react';

const Trashbin = ({ deletedServices, onRestore }) => {
  return (
    <div>
      <h2 className='heading'>Trashbin</h2>
      <ul className='item-list'>
        {deletedServices.map((service) => (
          <li key={service.id}>
            <h4>Service: {service.name}</h4>
            <p> <h6>Description: {service.description}</h6></p>
            <p>Price: ${service.price}</p>
            <div  className='buttons-edit-delete'>
            <button onClick={() => onRestore(service.id)}>Restore</button>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trashbin;
