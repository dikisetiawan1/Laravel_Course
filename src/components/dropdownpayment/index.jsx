import {  Dropdown, Container, Col, Card, Row } from "react-bootstrap";
import BcaLogos from "../../assets/BcaBankLogo.png";
import MandiriLogos from "../../assets/mandiriBankLogo.png";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";



const Dropdownpayment=()=>{

    return(
        <>
        <Container>
<Row>
  <Col xs="10" className="mt-4">
  <p style={{fontSize:'14px'}}>Bank Transfer (verifikasi manual)</p>
  <p style={{fontSize:'12px',color:'#6D7175',weight:'400'}}>Pembayaran melalui Bank Transfer Mandiri atau BCA. Metode bayar ini memerlukan verifikasi pembayaran manual melalui Whatsapp</p>
  
  </Col>
    <Col style={{marginTop:'40px'}}>

    <Cardbank paymentoption="Bank Transfer ke Rek Bank Mandiri" banklogos={MandiriLogos}/>
    <Cardbank paymentoption="Bank Transfer ke Rek Bank BCA" banklogos={BcaLogos}/>
    {/* <Dropdown>
    <Dropdown.Toggle  id="dropdown-custom-components" variant="light" style={{float:'right'}}>
    

    </Dropdown.Toggle>

    <Dropdown.Menu style={{width:"450px", marginLeft:'-430px',marginTop:'10px'}} >
      <Dropdown.Item >
  <Cardbank paymentoption="Bank Transfer ke Rek Bank Mandiri" banklogos={MandiriLogos}/>
      </Dropdown.Item>
    </Dropdown.Menu>


    <DropdownMenu style={{width:"450px", marginLeft:'-430px',marginTop:'80px'}}>
      <Dropdown.Item>
      <Cardbank paymentoption="Bank Transfer ke Rek Bank BCA" banklogos={BcaLogos}/>
      </Dropdown.Item>
    </DropdownMenu>
   
  </Dropdown> */}
    
    
    </Col>
    
</Row>
    <Row style={{marginTop:'0px'}}>
    <Col xs="10">
    <p style={{fontSize:'14px',marginTop:'40px  '}}>Virtual Account (verifikasi otomatis)</p>
      <p style={{fontSize:'12px',color:'#6D7175',weight:'100', marginTop:'20px  '}}>Pembayaran melalui virtual account berbagai bank. Metode bayar ini akan diverifikasi secara otomatis.  </p>
      

    </Col>
      <Col style={{marginTop:'40px'}}>
      <Cardbank paymentoption="Virtual Account Mandiri" banklogos={MandiriLogos}/>
      <Cardbank paymentoption="Virtual Account BCA" banklogos={BcaLogos}/>

      {/* <Dropdown >
        <Dropdown.Toggle  id="dropdown-custom-components" variant="light" style={{float:'right'}}>
        

        </Dropdown.Toggle>

        <Dropdown.Menu style={{width:"450px", marginLeft:'-430px',marginTop:'10px'}} >
          <Dropdown.Item >
      <Cardbank paymentoption="Virtual Account Mandiri" banklogos={MandiriLogos}/>
          </Dropdown.Item>
        </Dropdown.Menu>


        <DropdownMenu style={{width:"450px", marginLeft:'-430px',marginTop:'80px'}}>
          <Dropdown.Item>
          <Cardbank paymentoption="Virtual Account BCA" banklogos={BcaLogos}/>
          </Dropdown.Item>
        </DropdownMenu>
      
      </Dropdown> */}
      </Col>
    </Row>
      </Container>
            </>
        )
    }


    function Cardbank(props){

      return(
<>
    <Container>
    <Row>


      <Col xs="2">
      <img src={props.banklogos}></img>
   
      
      </Col>
      <Col  className="mx-4 mt-2" xs="6"> 
      
      <p style={{fontSize:'14px',weight:'600', color:'#131313'}}>{props.paymentoption}</p>
      
      </Col>


      <Col xs="2" className="mt-2 mx-2">
      <input type="radio">
      
      </input>
      </Col>
      
      
    </Row>
    
    </Container>
</>
  )
}





export default Dropdownpayment;