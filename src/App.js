import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/Navbar';
import { NavbarBrand } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cancel from './pages/cancel';
import Success from './pages/success';
import Store from './pages/store';
import CartProvider from './CartContext';
function App() {
  return (
    <CartProvider>
      <Container>
        <NavbarComponent>


        </NavbarComponent>
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />

          </Routes>
        </BrowserRouter>


      </Container>
    </CartProvider>
  );
}

export default App;
