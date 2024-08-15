import React, { Component } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dfort.css'
import { Carousel } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import D from '../IMAGES/D.webp';
import first from '../IMAGES/first.jpg'
import kashayam from '../IMAGES/kashayam.jpg'
import aesthetic from '../IMAGES/aesthetic.avif';
import dining from '../IMAGES/dining.avif';
import treatment from '../IMAGES/treatmet.jpg';
import bed from '../IMAGES/bed.jpg'
import flower from '../IMAGES/flower.jpeg';
import drinking from '../IMAGES/drinking.webp';
import ayurveda from '../IMAGES/ayurveda.jpg'

function Firstpage() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  return (
    <div className=' main container-fluid' style={{width:""}}>

      <div style={{ height: '100vh' }} >
        <nav className="navbar bg-body-tertiary ">
          <div className="container">
            <img src={D} width="50" height="50"></img>
            <a className="navbar-brand" href="#">

            </a>
            <ul className=" nav ">
              <li className="nav-item">
                <a className=" nav-link active " aria-current="page" href="#">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link header" href="#">ROOMS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link header" href="#">WELLNESS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link header" href="#">EVENTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link header" href="#">PACKAGES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link header" href="#">CONTACT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link header" href="#">BOOKS</a>
              </li>
            </ul>
          </div>
        </nav></div>

        
        <div className>
        <img src={first} className="frontimg" width="1400px" height="600px"/>
          <h2 className='text'> Turn Moments into memories;</h2>
          <h2 className='text'> Authentic ayurveda with</h2>
          <h2 className='text'> premium hospitality</h2>
        </div>
      
      <div>
        <h1 className='secondpage ms-5'>  All Seasons D'Fort Ayurvedic Resort in Kollam, Kerala</h1><br></br>
        <div className='item ' >
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item >
              <img src={kashayam} text="First slide" className='carousel' width="500px" height="500px" />


            </Carousel.Item>
            <Carousel.Item >
              <img src={dining} text="Second slide" className='carousel1' width="500px" height="500px" />

            </Carousel.Item>
            <Carousel.Item >
              <img src={aesthetic} text="Third slide" className='carousel1' width='500px' height="500px" />

            </Carousel.Item>
          </Carousel>
        </div>
      </div><br></br>
      <div style={{ height: "100vh" }} className=''>
        <h1></h1><br></br>
        <h1 className='story '>  D'Fort story</h1><br></br>
        
        
      <Row>
        <Col>
<img src={treatment} width="500px" class="storyimg"/>

        </Col>
        <Col className="storyright">
        Authentic Ayurveda, Affordable Luxury: the founders of D’Fort Ayurvedic Resort had this as their core vision while launching one of the best Ayurvedic Resorts in Kollam, renowned for offering Kerala’s authentic ayurvedic programs in affordable packages. The resort is situated adjacent to the 500 years old remnants of St. Thomas Fort – a heritage site, the famous Infant Jesus Cathedral – part of the famous eleven-and-half churches built and inherited from the time of Portuguese. The place is one of the modest tourist attractions in Kollam with its seaside village that shares three kilometres long beach and Breakwater, guarded by a 144Ft Light House.
        
        </Col>
      </Row></div>

      <div style={{height:"100vh"}}>
<h1 className='rooms'>Rooms & suits </h1>
<Row>
<Col>
<br></br>
  <h5 style={{position:"relative",top:"60px"}} className='roomie'>D’Fort Ayurvedic Resort offers a wide range of modern facilities catering to Corporates, Leisure and Wellness segments. The resort’s spacious Rooms & Suites of different choices & categories including rooms with private balcony, Meeting & Conferences facilities are all equipped with modern amenities of an upscale resort, including:</h5>
  <ul className='list'style= {{position:"relative",top:"60px"}}>
    <li> Self-regulated air-conditions </li>
    <li>Ceiling fan</li>
    <li>Tea/Coffee Set   </li>
    <li> Safe Lockers  </li>
    <li>Amenities Kit   </li>
  </ul>
</Col>
<Col>
<img src={bed} width="500px" height="400px"/>
</Col>
</Row>
 </div>
             
<div style={{height:"100vh"}}>
  <h1 className=' events text-center ' style={{ fontfamily: "Matemasie, sans-serif"  }}>  Events</h1>
  <Row>
    <Col style={{position:"relative", left:" 50px"}}>
<img src={flower} width="400px" height="300px"/>
<h3>Parties</h3>
<h6 className='justify-content-center'>Ranging from a Boardroom to a 400 Seater newly constructed Banquet Hall, D’Fort is an address the corporates seek for their Meetings & Conference needs. Three fully equipped venues has memorable stories of joyful family celebrations of birthdays and anniversaries, receptions, get-togethers and meetings hosted by various domestic and international organizations with trades and business in Kollam.</h6>
    <a>  learnmore</a>
    </Col>

    <Col style={{position:"relative",left:"50px"}}>
    <img src={drinking} width=" 400px" height=" 300px"/>
    <h3>  wedding </h3>
    <h6>       
    The multiple wedding venues, the poolside deck for a warm welcome, modern <br></br>amenities and an experienced team that anticipate needs and goes extra mile will<br></br> make your moment special and memorable. Our delightfully flexible wedding <br></br>packages are conveniently designed to meet the wide range of needs and tastes as <br></br>the bride and groom embark on their journey of a lifetime!
    </h6>
    <a> learnmore</a>
    </Col>
  </Row>


</div>
<div style={{height:"100vh"}}>
  <Row>
    <img src={ayurveda} height="600px"class='img  fade-inimage' ></img>
    <Col  className='ayurveda'>
<h1 className='ms-5'> welness Programs</h1>
</Col>
<Col className='ayurveda'>
<h3>A panel of Ayurveda doctors and experienced Panchakarma specialists lead our Wellness Programs that assure a holistic mind & body rejuvenation and healing experience. Following traditional and undiluted ayurvedic practices, our programs are well received by our domestic and international clients for its remarkable results and the warmth & hospitality of our multilingual Wellness Team.</h3>
<button type="button" class="btn  text-dark " disabled>About welness</button>
</Col>

</Row>


</div>


            
          </div>




    


    

  );
}

export default Firstpage;












