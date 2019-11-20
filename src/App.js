import React from 'react';
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Showcase from './components/Showcase/Showcase'
import Services from './components/Services/Services'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Showcase />
      <Services />
    </div>
  );
}

export default App;
