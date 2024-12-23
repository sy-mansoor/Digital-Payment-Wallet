import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/signup';
const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        
        <Routes>

          <Route path="/signup" element={<Signup />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;