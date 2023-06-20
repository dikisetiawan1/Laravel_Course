import { Col,Row,Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";





const Banner = () =>{

return(
<>

    
<Card style={{backgroundColor:'#2B3E58', height:'388px', marginTop:'100px'}}>
<Container >
    <Row>
        <Col>
            <h1 style={{color:'#FFFFFF', fontSize:'42px', textAlign:'center', paddingTop:'100px'}}>Sudah siap bergabung?</h1>
            <Link to="/payment" className="btn btn-warning text-white" style={{borderRadius:'20px' , width:'20%', marginLeft:'40%', marginTop:'64px', cursor:'pointer'}}>Daftar kelas</Link>
        </Col>  
    </Row>
</Container>
</Card>



</>


)






}

export default Banner;