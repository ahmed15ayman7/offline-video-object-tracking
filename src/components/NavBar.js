import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavScrollExample({fun}) {

  return (
    <Navbar bg="light" expand="lg" style={{backgroundImage:'linear-gradient(50deg,rgb(112, 5, 206),rgb(80, 0, 35))',position:'fixed',top:'0',left:'0',right:'0',zIndex:'100'}}>
      <Container fluid>
        <Link to={'/Familly-Movies/'}>
        <Navbar.Brand href="#" className="ms-5 mb-2 mt-2" style={{color:'#fff'}}>Familly movies</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Form className="d-flex w-75 ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="ms-5 rounded-pill"
              aria-label="Search"
              onInput={(e)=>fun(e.target.value)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
