
import './input.css'
import PortfolioPage from './pages/home/PortfolioPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactPage from './../src/pages/contact/ContactPage';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PortfolioPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
