import './App.css';
import { Route,Routes,BrowserRouter, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddNews from './pages/AddNews';
import EditNews from './pages/EditNews';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Newsdesc from './pages/Newsdesc';
import PostedNews from './pages/PostNews';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <ToastContainer/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<ProtectedRoute><HomePage/></ProtectedRoute>}/>
        <Route path='/add' element={<ProtectedRoute><AddNews/></ProtectedRoute>}/>
        <Route path='/edit/:newsid' element={<ProtectedRoute><EditNews/></ProtectedRoute>}/>
        <Route path='/about' element={<ProtectedRoute><About/></ProtectedRoute>}/>
        <Route path='/contact' element={<ProtectedRoute><Contact/></ProtectedRoute>}/>
        <Route path='/posted' element={<ProtectedRoute><PostedNews/></ProtectedRoute>}/>
        <Route path='/newsdesc/:newsid' element={<ProtectedRoute><Newsdesc/></ProtectedRoute>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


export const ProtectedRoute= ({children}) => {

  if(localStorage.getItem('newsone-user')){
  return children
  }
  else{
    return <Navigate to='/'/>
  }
}
