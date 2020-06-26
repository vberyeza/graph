import React from 'react';
import { Provider } from 'react-redux';

import store from './store/store';
import DataTable from './components/DataTable';
import Curve from './components/Curve';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Curve />
        <DataTable />
      </div>
    </Provider>

  );
}

export default App;
