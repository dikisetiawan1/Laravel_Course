import {Container, Row, Col} from 'react-bootstrap';
import '../footer/style.modules.css';

const Footer = () => {

    const title =['Program','Bidang ilmu','Tentang edspert'];
    const obj = {
    event1:"Online Course",
    event2:"Mini bootcamp",
    event3:"Bootcamp",
    bidang1:"Digital marketing",
    bidang2:"Product management",
    bidang3:"English",
    bidang4:"Programming",
    tentang1:"Bantuan",
    tentang2:"Kontak kami",
    tentang3:"Media sosial",
    
  }



    return(
<>
<div style={{backgroundColor:'#EFF4FA',height:'450px'}}>

<Container style={{marginTop:'400px', }}>
    <Row style={{color:'#A3A3A3', paddingTop:'200px'}}>
        <Col style={{marginRight:'90px'}} >
        <p>TAGLINE edspert disini</p>
        <p>Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581</p>
        
        </Col>
        <Col >
        <p style={{color:'#000000'}}>{title[0]}</p>
        <div className='list-footer'>
        <ul>
            <li>{obj.event1}</li>
            <li>{obj.event2}</li>
            <li>{obj.event3}</li>
        </ul>
        </div>
        </Col>
        <Col >
        <p style={{color:'#000000'}}>{title[1]}</p>
        <div className='list-footer'>
        <ul>
            <li>{obj.bidang1}</li>
            <li>{obj.bidang2}</li>
            <li>{obj.bidang3}</li>
            <li>{obj.bidang4}</li>
            
        </ul>
        </div>
        </Col>
        <Col >
        <p style={{color:'#000000'}}>{title[2]}</p>
        <div className='list-footer'>
        <ul >
            <li>{obj.tentang1}</li>
            <li>{obj.tentang2}</li>
            <li>{obj.tentang3}</li>
            
        </ul>
        </div>
        </Col>
       <p style={{marginTop:'50px', textAlignLast:'center'}}>Edspert, copyright. Alamat boleh ditaruh disini apabila diinginkan.</p>
    </Row>

</Container>
</div>


</>
    );
}

export default Footer;