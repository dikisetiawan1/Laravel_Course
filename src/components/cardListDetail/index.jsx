import { Container,Row,Col, Card } from "react-bootstrap";
import '../cardListDetail/style.modules.css';


const cardListDetail = () => {

return(

    <>


<Container>
    <Row>
        <Col>

        <Card className="mt-5 shadow " style={{width:'300px', height:'250px'}}>
        <Card.Body>
            <Card.Title>
                <div className="title-course">
                    <p className="details-fas">Materi</p>
                </div>
                <p className="details-fas" style={{marginLeft:'40px'}}>Fasilitas</p>

                <hr/>
            </Card.Title>
            
        </Card.Body>        
        </Card>
        
        </Col>


        <Col>
        <Card className="mt-5 shadow" style={{width:'900px', height:'800px'}}>

            <Card.Body>

            </Card.Body>
        </Card>
        
        
        
        </Col>
    </Row>
</Container>
</>
);


}

export default cardListDetail;