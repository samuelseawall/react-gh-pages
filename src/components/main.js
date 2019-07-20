import React from 'react';
import {Switch,Route} from 'react-router-dom';

import LandingPage from './landingpage';

import Contact from './contacts';
import Projects from './projects';
import Resume from './resume';


const Main = () => (
   <Switch>
    < Route exact path = "/" component={LandingPage}/>

    <Route path="/contacts" component={Contact}/>
    <Route path="/projects" component={Projects}/>
    <Route path="/resume" component={Resume}/>
     </Switch>
)    


export default Main;