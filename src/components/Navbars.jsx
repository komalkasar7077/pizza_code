import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import cart from '../Resources/cart.jpg';
import {
  Link
} from "react-router-dom";

function NavScrollExample() {
  return (
    
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">Pizza 🍕</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Link className='text-white text-decoration-none' to='/'>Home</Link> */}
            {/* <Nav.Link className='text-white text-decoration-none' to='/'>Home</Nav.Link> */}
            {/* <Nav.Link href={action1}>Home</Nav.Link> */}
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/contact'>contact</Nav.Link>
            <Nav.Link as={Link} to='/Login'>Login</Nav.Link>     
          </Nav>
          <div className='d-flex'>
            <h5 className='text-white m-2' >Offers🎇</h5>
            <h5 className='text-white m-2'>Account </h5>
            <h5 className='text-white m-2' ><img src={cart} alt="" height={40}  /></h5>
            
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;