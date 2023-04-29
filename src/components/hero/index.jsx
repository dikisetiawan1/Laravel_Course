import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../header/style.modules.css';
import Heroes from '../../assets/heroku.png'
import Substract from '../../assets/Subtract.png'
import Substract2 from '../../assets/Subtract2.png'
import Header from '../header'

const Hero = () => {
    return(
      <>

  <div className='background' style={{zIndex:'-3', position:'relative'}}>
<Header/>
        <Container>
          <Row>
            <Col>
            <div style={{marginTop:'100px'}}>
              <h1 style={{fontSize:'42px'}}>Jadi expert bersama edspert.id</h1>
              <p className='mt-5'>Tingkatkan skill dan pengetahuan bersama para mentor terbaik di bidangnya, untuk siapkan karir impian anda.</p>
           </div>
            </Col>
            <Col>
            <div className='right-header'>
              <img src={Heroes} style={{ width:'100%',marginTop:'40px'}} alt="" />
              <img src={Substract} style={{ width:'35%',marginTop:'100px', marginLeft:'-370px', position:'absolute', zIndex:'-1'}} alt="" />
              <img src={Substract2} style={{ width:'38%',marginTop:'256px', marginLeft:'-540px', position:'absolute', zIndex:'-1'}} alt="" />
            </div>
            </Col>

          </Row>
        </Container>
    </div>
   
    </>
    );
}
export default Hero;