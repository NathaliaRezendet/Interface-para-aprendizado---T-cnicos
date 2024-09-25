//C:\Users\playf\OneDrive\Desktop\playwiki\frontend\src\App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DeviceList from './components/DeviceList';
import DeviceDetails from './components/DeviceDetails';
import DeviceTopics from './components/DeviceTopics';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DeviceList />} />
        <Route path="/device/:id" element={<DeviceDetails />} />
        <Route path="/device/:id" element={<DeviceTopics />} />
      </Routes>
    </Router>
  );
}

export default App;
