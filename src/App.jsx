import React from 'react';
import Layout from './components/layout/Layout';
import Hero from '../src/sections/Hero';
import Features from '../src/sections/Features';
import AllFeatures from '../src/sections/AllFeatures';
import Security from '../src/sections/Security';
import Benefits from '../src/sections/Benefits';
import Testimonials from '../src/sections/Testimonials';

const App = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <AllFeatures />
      <Security />
      <Benefits />
      <Testimonials />
    </Layout>
  );
};

export default App;