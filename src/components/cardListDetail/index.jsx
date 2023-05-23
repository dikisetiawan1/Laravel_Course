
import { Container,Row,Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../cardListDetail/style.modules.css';
import '../../helper/data';
import {DataMateri, fasList} from "../../helper/data";
import checklis from '../../assets/check.svg'

const cardListDetail = () => {

return(

    <>


<Container fluid style={{backgroundColor:'#F5F5F5',zIndex:'-3'}}>
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
                           <Link to="/payment" className="btn btn-warning text-white mt-4" style={{borderRadius:'20px' , width:'80%', marginLeft:'30px'}}>Daftar kelas</Link>

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

    <Row>
      <Col>
      <Card className="mt-5 shadow" style={{width:'900px', height:'300px', borderRadius:'20px', right:'-400px'}}>
        <Card.Body>
      <Card.Title>
        <h3 style={{marginBottom:'25px', margin:'30px', marginLeft:'40px', fontWeight:'600'}}> Fasilitas</h3>
      <FasList arraydata={fasList}/>
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
        
      <div className="card-label img-check" key={data.id}> 
      <img src={checklis} alt="" />
        <label className="checkbox-main" style={{marginTop:'50px'}}>
        <span className="check-box"></span>
  
        </label>

        <span style={{fontSize:'20px', fontWeight:'600', paddingLeft:'10px',position:'absolute'}}>{data.title} </span><br/> 
        <span style={{fontSize:'14px',fontWeight:'400',color:'#868686',position:'absolute', marginRight:'60px', lineHeight:'1.5', paddingLeft:'10px', marginTop:'5px'}}>{data.sub}</span></div>  
        
      </>
      )});  
    
    return (  
      <div style={{marginLeft:'65px', marginRight:'60px'}}>  
    
        { listDataTitle}
       
      </div>  
    );  
  }  


  var FasList = function(props){
    var listDataFas = props.arraydata.map(function(data){
      return(
        <>
         <div className="card-label img-check" key={data.id}> 
         <img src={checklis} alt="" />
          <label className="checkbox-main">
      
          <span className="check-box"></span>
          </label>
          <span style={{fontSize:'20px', fontWeight:'600', paddingLeft:'10px',position:'absolute', marginTop:'-5px'}}>
            {data.name} 
            </span><br/> 
          </div>
        
        </>
      )
    });
  
    return(
      <>
      <div style={{marginLeft:'60px', marginTop:'30px'}} >
        {listDataFas}
      </div>
    
      </>
    );
  }

 

export default cardListDetail;