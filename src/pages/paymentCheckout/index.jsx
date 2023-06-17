import { Link } from "react-router-dom";
import { Card,Col,Row,Container } from "react-bootstrap";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Paymentcheckout from "../../components/paymentcheckout";





const ProductCheckout=()=>{


  

    return(
        
        <div >
        <Container fluid >
            <Row>
                <Col>
                
          <Header/>
                </Col>
            </Row>
            <Row>
                <h3 style={{marginTop:'159px',marginLeft:'115px'}}>
                    Checkout
                </h3>
                <Col>

                <Paymentcheckout/>

           
            
                </Col>
            </Row>
            <Row>
                <Col>
                <Footer/>
                
                </Col>
            </Row>
            
        </Container>
        </div>
    )
}

export default ProductCheckout;