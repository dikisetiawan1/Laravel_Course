import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../header/style.modules.css';
import { Button } from 'react-bootstrap';
import DropdownTop from '../../assets/Vector2.svg'
import DropdownDown from '../../assets/Vector1.svg'
import Logo from '../../assets/logo_Edspert.png'

const Header = () => {
    return(
      <>

  <div className='background' style={{zIndex:'-3', position:'relative'}}>
      <Navbar className='background'  >
      <Container >
        <Navbar href="#home"  className='color' style={{marginLeft:'100px'}}>  <img src={Logo} style={{width:'100px'}} alt="" /> </Navbar>
        <Nav className="justify-contento-end ">
          <Nav.Item href="#home" className='color px-3 '>Program <img src={DropdownDown} alt="" /> </Nav.Item>
          <Nav.Item href="#home" className='color px-3 '> Bidang ilmu <img src={DropdownTop} alt="" /></Nav.Item>
          <Nav.Item href="#home" className='color px-3'>Tentang edspert</Nav.Item>
          
        </Nav>
      </Container>
      <Button className='button-style color' size='lg'>Masuk/Daftar</Button>
    </Navbar>
    </div>
   
    </>
    );
}
export default Header;