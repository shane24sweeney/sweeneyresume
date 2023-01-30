import React, { useState } from "react";
import "./App.css";
import Education from "./components/education/education";
import HeadShot from "./components/HeadShot/HeadShot";
import About from "./components/about/about";
import FullResume from "./components/resume/fullresume";
import Testimonials from "./components/testimonials/testimonials";
import Email from "./components/Email";
import Charity from "./components/HeadShot/Charity";
import Teksystems from "./components/resume/Teksystems"
import "./App.css";
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


function App(){

const [title,  setTitleSwitch] = useState(true);
const titleString =  (<div>
  <testimonials
    title={setTitleSwitch}
  />
</div>);

const [recommend,  setRecommendSwitch] = useState(true);
const recommendString =  (<div>
  <testimonials
    recommend={setRecommendSwitch}
  />
</div>);





  return (
          <div className="App">
           
          <BrowserRouter>
          <Navigation />
          <Switch>
             <Route path="/home" component={HeadShot} exact/>
             <Route exact path="/"><Redirect to="/home" /></Route>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Email}/>
             <Route path="/fullresume" component={FullResume }/>
             <Route path="/testimonials" component={Testimonials}/>
             <Route path="/education" component={Education}/>
             <Route path="/Charity" component={Charity}/>
             <Route path="/teksystems" component={Teksystems}/>
            
            
             
           </Switch>
          </BrowserRouter>

          
          
              </div>

              
            );

          
          } 
          
        
    

export default App;
