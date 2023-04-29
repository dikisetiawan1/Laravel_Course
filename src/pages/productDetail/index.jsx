
import { Col, Container,Row } from "react-bootstrap";
import Header from "../../components/heroDetail";
import Footer from "../../components/footer";
import Card from "../../components/cardListDetail";

const ProductDetail = () => {

return(

<>
<Container fluid>
 <Row>
<Col>
<Header/>

</Col>
 </Row>

 <Row>
    <Col>
    <Card/>
    
    </Col>
 </Row>

 <Row>
    
<Col>

<Footer/>

</Col>
 </Row>
</Container>

</>

)

}

export default ProductDetail;