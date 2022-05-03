import {Navbar, Container, Nav} from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import NotFound from './components/NotFound';
import Shop from './components/Shop';

function App() {
  return (
    <>
        <div className="container bg-light p-3">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Інтернет-магазин</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                          <Link to="/" className={'ml-3'}>Головна</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
              <Routes>
                  <Route path="/" element={<Shop />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
        </div>
    </>

  );
}

export default App;
