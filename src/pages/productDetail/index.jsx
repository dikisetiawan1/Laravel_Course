
import { Col, Container,Row } from "react-bootstrap";
import Header from "../../components/heroDetail";
import Footer from "../../components/footer";
import Card from "../../components/cardListDetail";
import Banner from "../../components/banner";

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
   <Banner/>
   
   </Col>
 </Row>

 <Row>
    
<Col style={{marginTop:'-400px'}}>

<Footer/>

</Col>
 </Row>
</Container>

</>

)

}

export default ProductDetail;