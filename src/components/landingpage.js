import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';


class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
               <Grid className="landing-grid">
                     <Cell col={12}>
                  
                     <img
                      src = "https://instagram.fkin2-1.fna.fbcdn.net/vp/6183097ef49a687e89c30ddb9fb4b91d/5DBB09BB/t51.2885-19/s150x150/50837229_2271824569767554_9120237429557559296_n.jpg?_nc_ht=instagram.fkin2-1.fna.fbcdn.net"
                      alt="avatar"
                      className="avatar-image"
                       />

                      <div className='banner-text'>
                       <h1>Jr Web Developer</h1>
                       <hr/>
                        
                        <p> HTML/CSS | Javascript | React | React Native | Robotics |</p>
                           

                           <div className="social-links">
                          {/*Instagram*/}
                          <a href="https://www.instagram.com/moore_positivity/" rel="noopener noreferrer" target="_blank"> 
                          <i className="fa fa-instagram square" aria-hidden="true"/>
                          </a>  
                          {/*Steam*/}
                          <a href="https://steamcommunity.com/id/lovesyoulovesyou/" rel="noopener noreferrer" target="_blank"> 
                          <i className="fa fa-steam-square " aria-hidden="true"/>
                          </a> 
                          {/*Spotify*/}
                          <a href="https://open.spotify.com/user/4xp7hwpfveis2gonjmkbvhnrp?si=bAmGoRMETNGekUebzXJ17w" rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-spotify square" aria-hidden="true"/> 
                          </a> 
                          {/*Git Hub*/}
                          <a href="https://github.com/samuelseawall" rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-github-square" aria-hidden="true"/> 
                          </a> 
                        
                        </div>
                       
                      
                      </div>
                      </Cell>                
                </Grid>
            </div>
            
        
 
          
        )   
    }     
}

export default LandingPage;