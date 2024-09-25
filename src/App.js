import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Container from './Container';
import Loading from './components/Loading';

const NotFound = lazy(() => import('./components/NotFound'));
const Home = lazy(() => import('./components/Home'));
const List = lazy(() => import('./components/List'));
const Vieclam = lazy(() => import('./components/Vieclam'));
const Ungtuyen = lazy(() => import('./components/Ungtuyen'));
const Tracuu = lazy(() => import('./components/Tracuu'));

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Container />}>
              <Route index element={<Home />} />
              <Route path="/viec-lam-van-phong" element={<List />} />
              <Route path="/viec-lam-cua-hang" element={<List />} />
              <Route path="/chi-tiet-viec-lam-cua-hang" element={<Vieclam />} />
              <Route path="/viec-lam-van-phong" element={<Vieclam />} />
              <Route path="/ung-tuyen-viec-lam-cua-hang" element={<Ungtuyen />} />
              <Route path="/ung-tuyen-viec-lam-van-phong" element={<Ungtuyen />} />
              <Route path="/tra-cuu-ket-qua" element={<Tracuu />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;