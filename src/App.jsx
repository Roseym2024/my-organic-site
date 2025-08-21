import React from 'react';
import Header from './components/header';
import Navbar from './components/navbar';
import Home from './pages/home';
import Slider from './components/slider';

const App = () => {
  return (
     <div className="min-h-screen flex flex-col">

      {/* Header */}
      <Header />

      {/* Navbar */}

      <Navbar />
     
    

      {/* Carousel */}
     <Home/>

      {/* Hero */}
     

      {/* Other sections */}
      {/* Example usage: */}
      {/* <Section title="Our Products">...</Section> */}
      {/* <Section title="About Us">...</Section> */}

      {/* Footer */}
      
      
    </div>
  );
}

export default App;

