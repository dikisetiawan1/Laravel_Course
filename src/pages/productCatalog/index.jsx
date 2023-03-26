import { Container, Row, Col } from "react-bootstrap";
import Header from '../../components/header';
import Cards from '../../components/cards';

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
            
                </Col>
          
            </Row>
        </Container>
        
        
        </>

    );
}

export default ProductCatalog;