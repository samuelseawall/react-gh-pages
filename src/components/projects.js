import{ Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, Button, IconButton, CardText } from "react-mdl"
import React, { Component } from 'react';



class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {  activeTab: 0};
    }
    
     toggleCategories() {            
     if(this.state.activeTab === 0){
        return(  
            <div className="project-grid">
                {/* Project 1*/}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
               <CardTitle style = {{color: '#fff', height: '176px', background: 
               'url(http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png) center / cover'}}>React Project #1 </CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </CardText>
          <CardActions border>
              <Button colored>Github</Button>
            <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
          </CardActions>
             <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
            </CardMenu> 
        </Card> 
            

            {/* Project 2*/ }
             <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style = {{color: '#fff', height: '176px', background: 
               'url(http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png) center / cover'}}>React Project #2 </CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </CardText>
          <CardActions border>
              <Button colored>Github</Button>
            <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
          </CardActions>
            <CardMenu syle={{color: '#fff'}}>
               <IconButton name="share" /> 
            </CardMenu> 
        </Card> 
            
            {/* Project 3*/ }
       
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
               <CardTitle style = {{color: '#fff', height: '176px', background: 
               'url(http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png) center / cover'}}>React Project #3 </CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </CardText>
          <CardActions border>
              <Button colored>Github</Button>
            <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
          </CardActions>
            <CardMenu syle={{color: '#fff'}}>
               <IconButton name="share" /> 
            </CardMenu> 
        </Card> 
            
            {/* Project 4*/ }
            
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
               <CardTitle style = {{color: '#fff', height: '176px', background: 
               'url(http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png) center / cover'}}>React Project #4 </CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </CardText>
          <CardActions border>
              <Button colored>Github</Button>
            <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
          </CardActions>
            <CardMenu syle={{color: '#fff'}}>
               <IconButton name="share" /> 
            </CardMenu> 
        </Card> 
        </div>
        
     
       
        )   
      }   
}

    
    render() {
        return(
            <div clasName="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
            <Tab> React</Tab>
            </Tabs>
            <Grid>
                <Cell col={12}>
                    <div className="content"></div>
                </Cell>
              </Grid>
               {this.toggleCategories()}
            </div>
            
            
        )
    
    }
}

export default Projects;
