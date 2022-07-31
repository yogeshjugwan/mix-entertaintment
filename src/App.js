import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './compnents/common/Navbar';
import Home from './compnents/home/Home';
import SinglePage from './compnents/SinglePage';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/movie' element={<SinglePage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
