import React from 'react';
import Filter from './components/Filter';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';

function App() {
  return (
    <>
      <Filter />
      <ServiceAdd />
      <ServiceList />
    </>
  );
}

export default App;
