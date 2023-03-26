import { Container, Row, Col } from "react-bootstrap";
import Header from '../../components/header';
import '../Home/style.modules.css';

const Home = () => {


    return(
        <>
        <Container fluid>
            <Row>
                <Col>
           <Header/>
                

                </Col>
            </Row>
        </Container>
        
        
        </>

    );
}

export default Home;