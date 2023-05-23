
import { Col, Container, Row,Card } from 'react-bootstrap';
import Img from '../../assets/card-img.png';
import { Link } from 'react-router-dom';

const Cardss = () =>{


    return(
     <>
            <Container className='mt-5' >
                <Row>
                <Col> 
                <Link to="/detail" style={{textDecoration:'none',color:'black'}}>
                <Card style={{width:'22rem'}}>
                    <div style={{backgroundColor:'#152A46', height:'10rem', borderRadius:'8px 8px 0px 0px', position:'relative'}}>

                    <Card.Img variant="top" src={Img} style={{width:'100px', marginTop:'10px', marginLeft:'20px'}} />

                    <div style={{position:'absolute', marginTop:'-140px', marginLeft:'150px', color:'#fff'}}>
                        <p style={{fontSize:'16px', color:'#FFCD29', fontWeight:'800'}}>Intensive Bootcamp</p>
                        <h3 style={{fontSize:'20px' ,fontWeight:'800'}}>Programming Laravel<br/>
                            <span style={{fontSize:'14px',fontWeight:'200'}}>(Getting Started with Laravel 9)</span></h3>
                    </div>
                    </div>
                        <Card.Body style={{margin:'10px', marginBottom:'-10px'}}>
                         <Card.Title>Programming Laravel <br/>
                    Getting Started with Laravel 9</Card.Title>
                    <div style={{fontSize:'12px'}}>
                            <Row style={{marginTop:'10px'}}>
                            <Col>
                                 <p style={{color:'#00000080'}}>Batch</p> 
                                 </Col>
                            <Col><span style={{marginLeft:'-100px'}}>September 2022 </span></Col>
                            </Row>
                            <Row style={{marginTop:'-10px'}}>
                                <Col>
                                <p style={{color:'#00000080'}}>Mentor</p> 
                                </Col>
                                <Col><span style={{marginLeft:'-100px'}}>William Hartono, Farel Prayoga</span></Col>
                            </Row>
                     </div>
                     <p style={{fontSize:'15px', textAlignLast:'right', color:'#00000080'}}><del>Rp 2060.000 </del><span style={{fontSize:'20px', marginLeft:'10px', color:'#0ACF83', fontWeight:'800'}}>Rp 560.000</span></p>
            </Card.Body>
            </Card>
            </Link>
            
            </Col>


            <Col style={{marginLeft:'-10px'}}>
                <Link to="/detail" style={{textDecoration:'none',color:'black'}}> 
                <Card style={{width:'22rem'}}>
                    <div style={{backgroundColor:'#152A46', height:'10rem', borderRadius:'8px 8px 0px 0px', position:'relative'}}>

                    <Card.Img variant="top" src={Img} style={{width:'100px', marginTop:'10px', marginLeft:'20px'}} />

                    <div style={{position:'absolute', marginTop:'-140px', marginLeft:'150px', color:'#fff'}}>
                        <p style={{fontSize:'16px', color:'#FFCD29', fontWeight:'800'}}>Intensive Bootcamp</p>
                        <h3 style={{fontSize:'20px' ,fontWeight:'800'}}>Programming Laravel<br/>
                            <span style={{fontSize:'14px',fontWeight:'200'}}>(Getting Started with Laravel 9)</span></h3>
                    </div>
                    </div>
                        <Card.Body style={{margin:'10px', marginBottom:'-10px'}}>
                         <Card.Title>Programming Laravel <br/>
                    Getting Started with Laravel 9</Card.Title>
                    <div style={{fontSize:'12px'}}>
                            <Row style={{marginTop:'10px'}}>
                            <Col>
                                 <p style={{color:'#00000080'}}>Batch</p> 
                                 </Col>
                            <Col><span style={{marginLeft:'-100px'}}>September 2022 </span></Col>
                            </Row>
                            <Row style={{marginTop:'-10px'}}>
                                <Col>
                                <p style={{color:'#00000080'}}>Mentor</p> 
                                </Col>
                                <Col><span style={{marginLeft:'-100px'}}>William Hartono, Farel Prayoga</span></Col>
                            </Row>
                     </div>
                     <p style={{fontSize:'15px', textAlignLast:'right', color:'#00000080'}}><del>Rp 2060.000 </del><span style={{fontSize:'20px', marginLeft:'10px', color:'#0ACF83', fontWeight:'800'}}>Rp 560.000</span></p>
            </Card.Body>
            </Card>
            </Link>
            </Col>

            
            <Col style={{marginLeft:'-10px'}}> 
            <Link to="/detail" style={{textDecoration:'none',color:'black'}}> 
                <Card style={{width:'22rem'}}>
                    <div style={{backgroundColor:'#152A46', height:'10rem', borderRadius:'8px 8px 0px 0px', position:'relative'}}>

                    <Card.Img variant="top" src={Img} style={{width:'100px', marginTop:'10px', marginLeft:'20px'}} />

                    <div style={{position:'absolute', marginTop:'-140px', marginLeft:'150px', color:'#fff'}}>
                        <p style={{fontSize:'16px', color:'#FFCD29', fontWeight:'800'}}>Intensive Bootcamp</p>
                        <h3 style={{fontSize:'20px' ,fontWeight:'800'}}>Programming Laravel<br/>
                            <span style={{fontSize:'14px',fontWeight:'200'}}>(Getting Started with Laravel 9)</span></h3>
                    </div>
                    </div>
                        <Card.Body style={{margin:'10px', marginBottom:'-10px'}}>
                         <Card.Title>Programming Laravel <br/>
                    Getting Started with Laravel 9</Card.Title>
                    <div style={{fontSize:'12px'}}>
                            <Row style={{marginTop:'10px'}}>
                            <Col>
                                 <p style={{color:'#00000080'}}>Batch</p> 
                                 </Col>
                            <Col><span style={{marginLeft:'-100px'}}>September 2022 </span></Col>
                            </Row>
                            <Row style={{marginTop:'-10px'}}>
                                <Col>
                                <p style={{color:'#00000080'}}>Mentor</p> 
                                </Col>
                                <Col><span style={{marginLeft:'-100px'}}>William Hartono, Farel Prayoga</span></Col>
                            </Row>
                     </div>
                        <p style={{fontSize:'15px', textAlignLast:'right', color:'#00000080'}}><del>Rp 2060.000 </del><span style={{fontSize:'20px', marginLeft:'10px', color:'#0ACF83', fontWeight:'800'}}>Rp 560.000</span></p>
            </Card.Body>
            </Card>
            </Link>
            </Col>
            </Row>
            </Container>
            
     </>
    );
}

export default Cardss;