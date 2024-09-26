import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from './Container';
import Loading from './components/Loading';
import Main from './admin/components/Main';

const NotFound = lazy(() => import('./components/NotFound'));
const Home = lazy(() => import('./components/Home'));
const List = lazy(() => import('./components/List'));
const Vieclam = lazy(() => import('./components/Vieclam'));
const Themtaikhoan = lazy(() => import('./admin/components/Themtaikhoan'));
const Ungtuyen = lazy(() => import('./components/Ungtuyen'));
const Tracuu = lazy(() => import('./components/Tracuu'));
const Login = lazy(() => import('./admin/components/Login'));
const Danhsachviec = lazy(() => import('./admin/components/Danhsachviec'));

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Container />}>
              <Route index element={<Home />} />
              <Route path="viec-lam-van-phong/:workBlock" element={<List />} />
              <Route path="viec-lam-cua-hang/:workBlock" element={<List />} />
              <Route path="viec-lam-cua-hang/:workBlock/:title" element={<Vieclam />} />
              <Route path="viec-lam-van-phong/:workBlock/:title" element={<Vieclam />} />
              <Route path="ung-tuyen-viec-lam-cua-hang" element={<Ungtuyen />} />
              <Route path="ung-tuyen-viec-lam-van-phong" element={<Ungtuyen />} />
              <Route path="tra-cuu-ket-qua" element={<Tracuu />} />
              <Route path="login" element={<Login />} />
              <Route path="/auth" element={<Main />}>
                <Route path="quan-ly-tai-khoan" element={<Themtaikhoan />} />
                <Route path="danh-sach-cong-viec" element={<Danhsachviec />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;