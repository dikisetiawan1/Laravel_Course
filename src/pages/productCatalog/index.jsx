import { Container, Row, Col } from "react-bootstrap";
import Header from '../../components/header';
import Cards from '../../components/cards';
import Footer from '../../components/footer';

import './style.modules.css';

const ProductCatalog = () => {


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
            <Cards/>
                </Col>
          
            </Row>
            <Row>
                <Col>
            <Footer/>
                </Col>
          
            </Row>
        </Container>
        
        
        </>

    );
}

export default ProductCatalog;