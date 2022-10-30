import React from 'react';
import { Footer, Header, Navbar } from './components';
import { About, Testimonial } from './containers';

const App = () => {
  return (
    <div className='container mx-auto font-sans'>
      <Navbar />
      <Header />
      <About />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
