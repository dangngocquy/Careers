import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Container = () => {
  return (
    <div className="editor__page load__page">
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
};

export default Container;