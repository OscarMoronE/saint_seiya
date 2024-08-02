import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Error404 from './pages/Error404';
import Saint from './pages/Saint';
import Nav from './Nav';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/caballero/:saint' element={<Saint />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
