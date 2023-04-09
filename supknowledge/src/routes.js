import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import AdvancedSearch from './components/AdvancedSearch/AdvancedSearch';
import ObjectDetail from './components/ObjectDetail/ObjectDetail';

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/search" element={<AdvancedSearch />} />
      <Route exact path="/object/:objectId" element={<ObjectDetail />} />
    </Routes>
  );
};

export default AppRoutes;