import React from 'react';
import Card from './component/Card';
import {Container} from 'react-bootstrap';
import Navigation from './component/Navigation';
import Footer from './Footer';






function About () {
return(
<div>
<Navigation />
<br></br>
<Container>
<h1 className="text-white">About Us</h1>
<h3 className="text-white">We Provide Best Services For Customer</h3>
</Container>
<br></br>
<Card />
<br></br>
<Footer />



</div>
); 
}
export default About;