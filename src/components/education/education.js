import React from "react";
import  "../testimonials/testimonials.css";
import { Card } from 'semantic-ui-react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-bootstrap/Carousel';
import UCC from '../HeadShot/UCC.jpeg';
import NCState from '../HeadShot/NCState.jpeg';



const educationdescript =
[
{ 
degree: "Masters in Computer Science - 2015" 
}
,
{ 
degree: "Higher Diploma Computer Science - 1998/1999" 
},

{ 
degree: "B.A. Mathematical Studies and Sociology - 1995/1998" 
},
]

const theme = createMuiTheme({
  typography: {
    fontSize: "10px",
    fontFamily: [
      'Raleway', 'sans-serif',
      
    ].join(','),
  },});

function education () {


  return (
    <section id="education" >
    <ThemeProvider theme={theme}>
      <Card
     centered    className="flex-container"
    style={{
        height: '100%',
        padding: '15px', 
        borderRadius: '40px',
        boxShadow: '15px 15px 15px 15px rgb(20 20 20 / 60%)',
        width: '500px'
    }}
>
    <Carousel>
    <Carousel.Item interval={4000} 
  >
    <img
        className="testimonial"
src={NCState}
        alt="Image One"
      />
       <Typography variant="h1" gutterBottom>
       {educationdescript[0].degree}
       </Typography>
    
      <div >
</div>
</Carousel.Item>



    <Carousel.Item interval={4000} 
  >
    <img
        className="testimonial"
src={UCC}
        alt="Image Two"
      />
       <Typography variant="h1" gutterBottom>
       {educationdescript[1].degree}
       </Typography>
    
      <div >
</div>
</Carousel.Item>


    <Carousel.Item interval={4000} 
  >
    <img
        className="testimonial"
src={UCC}
        alt="Image One"
      />
     
    <div >
       <Typography variant="h2" gutterBottom>
       {educationdescript[2].degree}
   
</Typography>

</div>
</Carousel.Item>
</Carousel>
</Card>
</ThemeProvider>
</section>
  );
};
export default education;
