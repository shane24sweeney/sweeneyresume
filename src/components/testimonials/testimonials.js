import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Steve from "../HeadShot/Steve.jpeg";
import Jason from "../HeadShot/Jason.jpeg";
import Inti from "../HeadShot/Inti.jpeg";
import Ziad from "../HeadShot/Ziad.jpeg";
import Rajesh from "../HeadShot/Rajesh.jpeg";
import Jim from "../HeadShot/Jim.jpeg";
import Meanakshi from "../HeadShot/Meanashi.jpeg";
import Geoffrey from "../HeadShot/Geoffrey.jpeg";
import Gary from "../HeadShot/Gary.jpeg";
import  "./testimonials.css";
import { Card } from 'semantic-ui-react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
  typography: {
    fontSize: "10px",
    fontFamily: [
      'Raleway', 'sans-serif',
      
    ].join(','),
  },});

 

function testimonials (props)  {

  
  

  

  const testimonial =
  [
    { title: "Jason Craven -  Director Of Architecture at GPS Trackit",
  recommendation: "Shane was a great pleasure to have on the team. He was tremendous with all of the system automation work that he has been doing for years, but also stepped up and made the effort to pick up tasks with new technologies and help there as well. I could always count on Shane to keep me informed about his progress, and be certain that he would make every effort possible to get the job done, both right and on time.I offer my highest recommendation for Shane and would attest that he would be an asset in almost any organization. " 
},
{ title: "Steve Wright VP - Deutsche Bank",
recommendation: "In my time working with Shane at Itron, he was very diligent in all aspects of his job. Technically strong and was always quick to volunteer for action items outside his job role. He was also very diligent in follow up actions and made sure that there was follow through to completion. The team enjoyed working with Shane and came to rely on him for his product knowledge. I don't hesitate to recommend him for any technical position. " 
},
{ title: "Inti Sanchez - Test Automation Consultant",
  recommendation: "I highly recommend Shane he is an excellent coworker and maintains a high standards in delivering results." 
},
{ title: "Ziad Harb - Senior Test Automation",
  recommendation: "I had the privilege of working with Shane at XM satellite radio. He is proactive, result oriented, responsible and technically sound employee and he is always ready to put all his energy and time to get the job done. He has an exceptional troubleshooting and analytical skill. Shane is a great asset to any company." 
}
,
{ title: "Rajesh Desai - Director Of Quality Assurance",
  recommendation: "I worked with Shane at Itron. He is a dependable and reliable team player. He always puts the needs of the QA organization first and dedicates 100% of his time to make sure he not only delivers on his assignments but also help others achieve their goals in the process. He possesses excellent programming skills which enable him to create modular, extensible automation frameworks. He would be a valuable asset to any QA team." 
},
{ title: "Jim Hanley - Manager of Systems Architecture",
  recommendation: "Shane is a hard-working, dedicated engineer who uses the latest best practices in software. He led the system test validation of all meter product lines across both IEC and ANSI. Shane assisted in writing a DP for embedded software security with my guidance. Shane is highly motivated, a great team player, extremely positive, and I would love to work with Shane again." 
},
{ title: "Kelly Fichman - Software Developer",
  recommendation: "Shane and I were Master's students and worked together on multiple class projects. He did an exemplary job all around on every part of the work: technical design, actual coding, testing, and deployment. He could look at a problem, envision a solution and potential pitfalls, and communicate these things to the rest of the team in a very short amount of time. And even though he was more experienced than the rest of us, he brought us up to his level as opposed to talking down to us. Shane has been a working developer for as long as I've known him (7+ years). He is both very good at development and engineering and an excellent communicator. I would recommend him for any type of software position, including project management and program development. This guy really does know his stuff, and he's happy to share that knowledge with his team." 
},
{ title: "Meanakshi Sinha - Experienced Quality Assurance Leader",
  recommendation: "I worked with Shane at PeopleNet - Shane was very familiar with the Automation tools and was tasked to work on the Automation set up from scratch at PeopleNet.He is a dedicated, experienced, software professional with a vast experience in all aspects of QA software engineering. He is also an excellent team player, with high integrity and work ethics. Shane can make great contributions to a company and help build excellent products. He is fun to work with!" 
},
{ title: "Geoffrey Sawyer - End User Support Analyst / Windows System Administrator (Contractor) at WheribleIoT",
  recommendation: "It’s rare that you come across standout talent like Shane’s. I had the pleasure of working with Shane for two years at GE, collaborating on several product development teams. Shane’s ability to juggle multiple projects was unlike any I’ve seen before and made a dramatic difference in the productivity level of our team. As a team member or a leader, Shane earns my highest recommendation." 
},
{ title: "Gary Hall - Embedded Software Engineer Staff at Lockheed Martin",
  recommendation: "Shane is a very knowledgeable Engineer with outstanding communication skills who has a genuine drive to solve any issue or task. Shane never gives up and always find solutions to the toughest of problems. He willingly goes the distance working extra hours and applying methodical effort to achieve milestones on time and ahead of time. He is very easy to work with and gets along with everyone, a true team player. Shane is a valuable asset to any team in the Engineering world. Shane's skillset and strengths in Software and Automation are rock solid and he practices all of the modern standards to ensure the corporation he is working for remains compliant on all ethical and legal levels. I would love to have Shane on my team at Lockheed Martin." 
}
  ];
 
  return (
    <ThemeProvider theme={theme}>
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
      <img
          className="testimonial"
src={Jason}
          alt="Image One"
        />
         <Typography variant="h1" gutterBottom>
         {testimonial[0].title}
         </Typography>
      
        <div >
      <span>   <Typography variant="h2" gutterBottom>
      {testimonial[0].recommendation}
         </Typography> </span>
     
        
      </div>
    
         
        <Carousel.Caption>
   
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
      <img
          className="testimonial"
src={Steve}
          alt="Image Two"
        />
     <Typography variant="h1" gutterBottom>
     {testimonial[1].title}
         </Typography>
      
        <div >
      <span>   <Typography variant="h2" gutterBottom>
      {testimonial[1].recommendation}
         </Typography> </span>
     
        
      </div>
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
      <img
          className="testimonial"
src={Inti}
          alt="Image Three"
        />
      <Typography variant="h1" gutterBottom>
         {testimonial[2].title}
         </Typography>
      
        <div >
      <span>   <Typography variant="h2" gutterBottom>
         {testimonial[2].recommendation}
         </Typography> </span>
     
        
      </div>
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
      <img
          className="testimonial"
src={Ziad}
          alt="Image Four"
        />
     <Typography variant="h1" gutterBottom>
         {testimonial[3].title}
         </Typography>
      
        <div >
      <span>   <Typography variant="h2" gutterBottom>
         {testimonial[3].recommendation}
         </Typography> </span>
     
        
      </div>
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
      <img
          className="testimonial"
src={Rajesh}
          alt="Image Four"
        />
     <Typography variant="h1" gutterBottom>
         {testimonial[4].title}
         </Typography>
      
        <div >
      <span>   <Typography variant="h2" gutterBottom>
         {testimonial[4].recommendation}
         </Typography> </span>
     
        
      </div>
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
      <img
          className="testimonial"
src={Jim}
          alt="Image Five"
        />
    <Typography variant="h1" gutterBottom>
         {testimonial[5].title}
         </Typography>
      
        <div >
      <span>   <Typography variant="h2" gutterBottom>
         {testimonial[5].recommendation}
         </Typography> </span>
     
        
      </div>
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
     
        
      <Typography variant="h1" gutterBottom>
         {testimonial[6].title}
         </Typography>
      
        <div >
      <span>   <Typography variant="h2" gutterBottom>
         {testimonial[6].recommendation}
         </Typography> </span>
     
        
      </div>
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
      <img
          className="testimonial"
src={Meanakshi}
          alt="Image Six"
        />
    <Typography variant="h1" gutterBottom>
         {testimonial[7].title}
         </Typography>
      
        <div >
      <span>   <Typography variant="h2" gutterBottom>
         {testimonial[7].recommendation}
         </Typography> </span>
     
        
      </div>
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
      <img
          className="testimonial"
src={Geoffrey}
          alt="Image Seven"
        />
    <Typography variant="h1" gutterBottom>
         {testimonial[8].title}
         </Typography>
      
        <div >
      <span>   <Typography variant="h2" gutterBottom>
         {testimonial[8].recommendation}
         </Typography> </span>
     
        
      </div>
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
      <img
      className="testimonial"
         // className="d-block w-100"
src={Gary}
          alt="Image Nine"
        />
   <Typography variant="h1" gutterBottom>
         {testimonial[9].title}
         </Typography>
      
        <div >
      <span>   <Typography variant="h2" gutterBottom>
         {testimonial[9].recommendation}
         </Typography> </span>
     
        
      </div>
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  </Card>
  </ThemeProvider>
);
}
      
 

export default testimonials;
