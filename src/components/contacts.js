import React, {Component} from 'react';
import {Grid, Cell, ListItemContent, List, ListItem } from 'react-mdl'




class Contacts extends Component {
    render() {
        return ( 
        <div className="comtact-body">
        <Grid className="contact-grid">
            <Cell col={6}>
            <h2>Shamar Moore</h2>
            <img
                src = "https://instagram.fkin2-1.fna.fbcdn.net/vp/6183097ef49a687e89c30ddb9fb4b91d/5DBB09BB/t51.2885-19/s150x150/50837229_2271824569767554_9120237429557559296_n.jpg?_nc_ht=instagram.fkin2-1.fna.fbcdn.net"
                alt="avatar"
                style={{height: '250px', borderRadius: '15px'}}
                />
                <p style={{width: '75%', margin: 'auto', paddingTop:'1em'}}>My name is Shamar Moore and I am a Jr Web Developer,currently living in Jamaica,KNG. I have gained alot of experience in HTML,CSS and Javascript, I have developed a great passion for web development and hope to improve in it everyday by experimenting with different website ideas and designs. I am both driven and self-motivated, I strive to become a better web developer.</p>
            </Cell>
            <Cell col={6}>
                <h2>Contact Me</h2>
                <hr/>
               <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', textAlign:'left'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (876) 781-2016
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-steam" aria-hidden="true"/>
                    Sky_Saber
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    shamar.alex.moore@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-spotify" aria-hidden="true"></i>
                    Sky
                  </ListItemContent>
                </ListItem>
                </List>
                </div>
                </Cell>
              </Grid>
            </div>
        )
    }
}

export default Contacts;
