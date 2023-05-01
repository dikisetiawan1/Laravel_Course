
import { Container,Row,Col, Card } from "react-bootstrap";
import '../cardListDetail/style.modules.css';
import '../../helper/data';
import DataMateri from "../../helper/data";


const cardListDetail = () => {

return(

    <>


<Container>
    <Row>
        <Col>

        <Card className="mt-5 shadow " style={{width:'300px', height:'270px', borderRadius:'20px'}}>
        <Card.Body>
            <Card.Title>
                <div className="title-course">
                    <p className="details-fas">Materi</p>
                </div>
                <p className="details-fas" style={{marginLeft:'40px'}}>Fasilitas</p>

                <hr/>

                <Row>
                    <Col>
                    <p style={{fontSize:'16px',color:'#6D7175'}}><del>Rp. 125.000</del></p>
                    
                    </Col>
                    <Col>
                    <p style={{fontSize:'20px',color:'#FF6A28'}}>Rp. 99.000</p>
                    </Col>
                  <a href="#" className="btn btn-warning text-white mt-4 " style={{borderRadius:'20px' , width:'80%', marginLeft:'30px'}}>Daftar Kelas</a>
                </Row>
            </Card.Title>
            
        </Card.Body>        
        </Card>
        
        </Col>


        <Col>
        <Card className="mt-5 shadow" style={{width:'900px', height:'650px', borderRadius:'20px'}}>

            <Card.Body>
                <h3 style={{marginBottom:'25px', margin:'30px', marginLeft:'40px', fontWeight:'600'}}>Materi</h3>
                <Card.Title>
                <CardList arrydata={DataMateri} /> 
             
                </Card.Title>
            </Card.Body>
        </Card>
        
        
        
        </Col>
    </Row>
</Container>
</>
);




}
var CardList = function (props) {  
    //ALl data Array  
    var listDataTitle = props.arrydata.map(function (data) {  
      return (
       <>
        
      <div className="card-label mt-3" key={data.id}> 
        <label className="checkbox-main">
        <input  type="checkbox" for="checkbox" name="checkbox" id="checkbox"/>
        <span className="check-box"></span>
        </label>

        <span style={{fontSize:'20px', fontWeight:'600', paddingLeft:'10px',position:'absolute', marginTop:'-25px'}}>{data.title} </span><br/> 
        <span style={{fontSize:'14px',fontWeight:'400',color:'#868686',position:'absolute', marginTop:'-20px', marginRight:'60px', lineHeight:'1.5', paddingLeft:'10px'}}>{data.sub}</span></div>  
        
      </>
      )});  
    
    return (  
      <div style={{marginLeft:'65px', marginRight:'60px'}}>  
    
        { listDataTitle}
       
      </div>  
    );  
  }  


 

export default cardListDetail;