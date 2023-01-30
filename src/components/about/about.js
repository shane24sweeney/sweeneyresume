import React from "react";
import  "../testimonials/testimonials.css";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-bootstrap/Carousel';
import Tropies from "../HeadShot/Tropies.png";
import { Card,  Image } from 'semantic-ui-react';


const theme = createMuiTheme({
  typography: {
    fontSize: "10px",
    fontFamily: [
      'Raleway', 'sans-serif',
      
    ].join(','),
  },});

function about () {
  

  return (
    <ThemeProvider theme={theme}>
    <section id="about">
    <Card centered    className="flex-container flex-item"
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
         <Typography variant="h1" gutterBottom>
      
         <p>
Your mind is clear. Your heart rate is racing with anticipation and
        excitement. The world's surroundings suddenly disappear and it's just
        you and the open road ahead. That is running a race in a nutshell. For
        an avid runner, this is the motivation to keep going. Completing
        something from start to finish for a sense of accomplishment and
        victory. The feeling and high from being a software developer is very
        similar. You receive the same satisfaction of seeing something through
        from beginning to end. The excitement and anticipation of knowing you're
        about to create something new is unlike any other. A challenge has been
        extended and accepted, and it's time to see it through to victory. I am
        both a runner and a software developer, and feel very fortunate to be
        able to experience such satisfaction in both my career and fitness
        journey.
        </p>
        <p></p>
          <cite>
            Shane James Sweeney,  You have to fail to succeed
          </cite>
   </Typography>
   </Carousel.Item>
   <Carousel.Item interval={4000} 
    >
    <Typography variant="h1" gutterBottom>
    <Image src={Tropies} wrapped ui={true} />
    </Typography>
    </Carousel.Item>
   </Carousel>
     </Card>
     </section>
      </ThemeProvider>
  );
};
export default about;
