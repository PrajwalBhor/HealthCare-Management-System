import React from 'react';

const ServiceList = ({ services }) => {

  
  return (
    <div>
      <h2 className='heading'>Service List</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>Price: ${service.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
