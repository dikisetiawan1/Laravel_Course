import { Col,Row,Container,  } from "react-bootstrap";





const Banner = () =>{

return(
<>
<div style={{backgroundColor:'#2B3E58', height:'386px', marginTop:'100px'}}>
    

<Container >
    <Row>
        <Col>
            <h1 style={{color:'#FFFFFF', fontSize:'42px', textAlign:'center', paddingTop:'100px'}}>Sudah siap bergabung?</h1>
            
            <a href="#" className="btn btn-warning text-white " style={{borderRadius:'20px' , width:'20%', marginLeft:'40%', marginTop:'64px', cursor:'pointer'}}>Daftar Kelas</a>

         

        </Col>
    </Row>
</Container>

</div>

</>


)






}

export default Banner;