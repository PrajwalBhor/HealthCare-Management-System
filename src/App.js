import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddServiceForm from './components/AddServiceForm';
import ServiceList from './components/ServiceList';
import ManageServices from './components/ManageServices';
import Trashbin from './components/Trashbin';

function App() {
  const [services, setServices] = useState([]);
  const [deletedServices, setDeletedServices] = useState([]);

  // Add new service
  const addService = (newService) => {
    setServices([...services, { id: Date.now(), ...newService }]);
  };

  // Delete service (move to Trashbin)
  const deleteService = (id) => {
    const deletedService = services.find(service => service.id === id);
    setDeletedServices([...deletedServices, deletedService]);
    setServices(services.filter(service => service.id !== id));
  };

  // Restore deleted service
  const restoreService = (id) => {
    const restoredService = deletedServices.find(service => service.id === id);
    setServices([...services, restoredService]);
    setDeletedServices(deletedServices.filter(service => service.id !== id));
  };

  // Update service
  const updateService = (id, updatedService) => {
    setServices(services.map(service =>
      service.id === id ? { ...service, ...updatedService } : service
    ));
  };

  const deleteServicePermanently=(id) =>{
    setDeletedServices(deletedServices.filter(service=>service.id !==id));
  };

  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <ul>
           {/* <li><Link to="/">Service List</Link></li> */}
            <li><Link to="/add"  >Add Service</Link></li>
            <li><Link to="/manage">Manage Services</Link></li>
            <li><Link to="/trashbin">Trashbin</Link></li>
          </ul>
        </div>
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={<ServiceList services={services} />}
            />
            <Route
              path="/add"
              element={<AddServiceForm onAdd={addService} />}
            />
            <Route
              path="/manage"
              element={
                <ManageServices
                  services={services}
                  onDelete={deleteService}
                  onUpdate={updateService}
                />
              }
            />
            <Route
              path="/trashbin"
              element={
                <Trashbin
                  deletedServices={deletedServices}
                  onRestore={restoreService}
                  onPermanentDelete={deleteServicePermanently}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
