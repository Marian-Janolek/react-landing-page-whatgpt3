import React from 'react';
import {
  Footer,
  Blog,
  Features,
  Possibility,
  WhatGPT3,
  Header,
} from './containers';
import { Cta, Brand, Navbar } from './components';

const App = () => {
  return (
    <div className="app">
      <div className="gradient-bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
