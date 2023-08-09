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

function App() {
  return (
    <Container>
      <NavbarComponent>


      </NavbarComponent>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Store/>} />
          <Route path="success" element = {<Success/>} />
          <Route path="cancel" element = {<Cancel/>} />

        </Routes>
      </BrowserRouter>


    </Container>

  );
}

export default App;
