import { Container, Row,Col, Card} from "react-bootstrap";
import Dropdownpayment from "../dropdownpayment";


const Paymentcheckout=()=>{

return(
    <>
    <Container fluid >

<Row>
    <Col>
    
    <Card style={{width:'40%',marginLeft:'100px',marginTop:'35px', height:"800px"}}>
        <Card.Body>
        <Card.Title>
            
               <p style={{fontSize:'20px', marginLeft:'24px', color:'#131313', weight:'600'}}>Pilih Metode Pembayaran</p>

               <Container>
                <Row>
                    <Col>
                   
                <Dropdownpayment/>
            
                </Col>
                </Row>
               </Container>
               

            
        </Card.Title>
        </Card.Body>
    </Card>
    
    </Col>
</Row>
    </Container>
    
    </>



   
)


}


export default Paymentcheckout;