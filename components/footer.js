import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BsInstagram} from 'react-icons/bs';

function Footer() {
  return (
    <>
    
      <Nav bg="dark" className="justify-content-center bg-dark">
      <Nav.Link className="link-light" target={"_blank"} href="impressum.html">Impressum</Nav.Link>
      <Nav.Link className="link-light" target={"_blank"} href="datenschutz.html">Datenschutz</Nav.Link>
      <Nav.Link className="link-light" target={"_blank"} href="//www.instagram.com/jochenbielerphotography"><BsInstagram/></Nav.Link>
    </Nav>
    </>
  );
}

export default Footer;