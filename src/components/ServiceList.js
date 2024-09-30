import React from 'react';

const ServiceList = ({ services }) => {

  if(services && services.length === 0 ){
    services.push({
      id: 73883,
      name: 'Dada giri dermatology',
      description: 'we specialize in dermatology. Please contact us if you have any problem',
      price: 100
      })
  }
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
