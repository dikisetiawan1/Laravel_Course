import { Container, Row,Col, Card} from "react-bootstrap";








const Paymentbank=()=>{

return(
    <>
    <Container fluid >

<Row>
    <Col>
    
    <Card style={{width:'40%',marginLeft:'100px',marginTop:'35px'}}>
        <Card.Body>
        <Card.Title>
            
               <p style={{fontSize:'20px'}}>Pilih Metode Pembayaran</p>

            
        </Card.Title>
        </Card.Body>
    </Card>
    
    </Col>
</Row>
    </Container>
    
    </>



   
)


}


export default Paymentbank;