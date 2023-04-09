import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import AdvancedSearch from './components/AdvancedSearch/AdvancedSearch';
import ObjectDetail from './components/ObjectDetail/ObjectDetail';

Routes = () => {
  return (
    <Routes>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={AdvancedSearch} />
      <Route exact path="/object/:objectId" component={ObjectDetail} />
    </Routes>
  );
};

export default Routes;