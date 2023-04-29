import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../header/style.modules.css';
import Heroes from '../../assets/heroku.png'
import Substract from '../../assets/Subtract.png'
import Substract2 from '../../assets/Subtract2.png'
import Header from '../header'

const HeroDetail = () => {
    return(
      <>

  <div className='background' style={{zIndex:'-3', position:'relative'}}>
<Header/>
        <Container>
          <Row>
            <Col>
            <div style={{marginTop:'100px',width:'100%'}}>
              <h1 style={{fontSize:'50px',fontWeight:'800'}}>Programming Laravel <span style={{fontSize:'36px', fontWeight:'600'}}> Getting Started with Laravel 9</span></h1>
              <p className='mt-5'>Mentor </p>
              <Row>
                <Col>
                
              <h4>William Hartono</h4>
              <p>Developer at Widya Edu</p>
                </Col>
                <Col>
                
              <h4>Farel Prayoga</h4>
              <p>Developer at Widya Edu</p>
                </Col>
              </Row>
              
           </div>
            </Col>
            <Col>
            <div className='right-header'>
              <img src={Heroes} style={{ width:'45%',marginTop:'350px', float:'right', marginRight:'-50px'}} alt="" />
              <img src={Substract} style={{ width:'25%',marginTop:'350px',right:'30px', position:'absolute', zIndex:'-1'}} alt="" />
            </div>
            </Col>

          </Row>
        </Container>
    </div>
   
    </>
    );
}
export default HeroDetail;