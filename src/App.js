import React from 'react';
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Showcase from './components/Showcase/Showcase'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Showcase />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
