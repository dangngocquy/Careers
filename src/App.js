// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import Container from './Container';
// import Loading from './components/Loading';
// import Main from './admin/components/Main';

// const NotFound = lazy(() => import('./components/NotFound'));
// const Home = lazy(() => import('./components/Home'));
// const List = lazy(() => import('./components/List'));
// const Vieclam = lazy(() => import('./components/Vieclam'));
// const Themtaikhoan = lazy(() => import('./admin/components/Themtaikhoan'));
// const Ungtuyen = lazy(() => import('./components/Ungtuyen'));
// const Tracuu = lazy(() => import('./components/Tracuu'));
// const Login = lazy(() => import('./admin/components/Login'));
// const Danhsachviec = lazy(() => import('./admin/components/Danhsachviec'));

// const App = () => {
//   return (
//     <div className='App'>
//       <BrowserRouter> 
//         <Suspense fallback={<Loading />}>
//           <Routes>
//             <Route path="/" element={<Container />}>
//               <Route index element={<Home />} />
//               <Route path="viec-lam-van-phong/:workBlock" element={<List />} />
//               <Route path="viec-lam-cua-hang/:workBlock" element={<List />} />
//               <Route path="viec-lam-cua-hang/:workBlock/:title" element={<Vieclam />} />
//               <Route path="viec-lam-van-phong/:workBlock/:title" element={<Vieclam />} />
//               <Route path="ung-tuyen-viec-lam/:title" element={<Ungtuyen />} />
//               <Route path="tra-cuu-ket-qua" element={<Tracuu />} />
//               <Route path="login" element={<Login />} />
//               <Route path="/auth" element={<Main />}>
//                 <Route path="quan-ly-tai-khoan" element={<Themtaikhoan />} />
//                 <Route path="danh-sach-cong-viec" element={<Danhsachviec />} />
//               </Route>
//             </Route>
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </Suspense>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;
import React, { Suspense, lazy } from 'react';
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
  const renderRoute = () => {
    const path = window.location.pathname.replace('/Careers', '').toLowerCase();
    
    if (path === '/' || path === '') return <Home />;
    if (path.startsWith('/viec-lam-van-phong/') || path.startsWith('/viec-lam-cua-hang/')) {
      const segments = path.split('/');
      if (segments.length === 3) return <List workBlock={segments[2]} />;
      if (segments.length === 4) return <Vieclam workBlock={segments[2]} title={segments[3]} />;
    }
    if (path.startsWith('/ung-tuyen-viec-lam/')) return <Ungtuyen title={path.split('/')[2]} />;
    if (path === '/tra-cuu-ket-qua') return <Tracuu />;
    if (path === '/login') return <Login />;
    if (path.startsWith('/auth/')) {
      if (path === '/auth/quan-ly-tai-khoan') return <Main><Themtaikhoan /></Main>;
      if (path === '/auth/danh-sach-cong-viec') return <Main><Danhsachviec /></Main>;
    }
    return <NotFound />;
  };

  return (
    <div className='App'>
      <Suspense fallback={<Loading />}>
        <Container>
          {renderRoute()}
        </Container>
      </Suspense>
    </div>
  );
};

export default App;