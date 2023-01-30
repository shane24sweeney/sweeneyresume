import React, { Component } from "react";
import Spotlight from "rc-spotlight";
import Shane from "../HeadShot/Shane.jpg";
import { Card, Icon, Image } from 'semantic-ui-react'


function headShots ()  {
  return (

  <Card centered>
    <Image src={Shane} wrapped ui={false} />
    <Card.Content >
      <Card.Header>Shane James Sweeney</Card.Header>
      <Card.Meta >
      <Spotlight >
        <span className='date'>It started with a Commodore 64 in Cork, Ireland</span>
      </Spotlight>
      </Card.Meta>
      <Card.Description>
       
        Shane loves family, friends, charity work, software, dogs and running 
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Software Guru
      </a>
    </Card.Content>
  </Card>

  )
  

  
};

export default headShots;
