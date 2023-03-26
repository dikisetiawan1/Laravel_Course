import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../header/style.modules.css';
import { Button } from 'react-bootstrap';
import Hero from '../../assets/heroku.png'
import Substract from '../../assets/Subtract.png'
import Substract2 from '../../assets/Subtract2.png'

const Header = () => {
    return(
      <>

  <div className='background' style={{zIndex:'-3', position:'relative'}}>
      <Navbar className='background'  >
      <Container >
        <Navbar href="#home"  className='color' style={{marginLeft:'100px'}}>Edspert</Navbar>
        <Nav className="justify-contento-end ">
          <Nav.Item href="#home" className='color px-3 '>Program </Nav.Item>
          <Nav.Item href="#home" className='color px-3'>Bidang ilmu</Nav.Item>
          <Nav.Item href="#home" className='color px-3'>Tentang edspert</Nav.Item>
          
        </Nav>
      </Container>
      <Button className='button-style color' size='lg'>Masuk/Daftar</Button>
    </Navbar>

        <Container>
          <Row>
            <Col>
            <div style={{marginTop:'100px'}}>
              <h1>Jadi expert bersama edspert.id</h1>
              <p className='mt-5'>Tingkatkan skill dan pengetahuan bersama para mentor terbaik di bidangnya, untuk siapkan karir impian anda.</p>
           </div>
            </Col>
            <Col>
            <div className='right-header'>
              <img src={Hero} style={{ width:'100%',marginTop:'40px'}}/>
              <img src={Substract} style={{ width:'35%',marginTop:'100px', marginLeft:'-370px', position:'absolute', zIndex:'-1'}}/>
              <img src={Substract2} style={{ width:'38%',marginTop:'256px', marginLeft:'-540px', position:'absolute', zIndex:'-1'}}/>
            </div>
            </Col>

          </Row>
        </Container>
    </div>
   
    </>
    );
}
export default Header;