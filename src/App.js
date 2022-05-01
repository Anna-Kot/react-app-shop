import {Navbar, Container, Nav} from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import NotFound from './components/NotFound';
import Shop from './components/Shop';
import Basket from "./components/Basket";

function App() {
  return (
    <div className={'bg-dark'}>
        <div className="container bg-light p-3">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Інтернет-магазин</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                          <Link to="/" className={'ml-3'}>Головна</Link>
                          <Link to="/basket" className={'ml-3'}>Кошик</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="basket" element={<Basket />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    </div>

  );
}

export default App;
