import React, { Component } from 'react';
import  { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src = "https://instagram.fkin2-1.fna.fbcdn.net/vp/6183097ef49a687e89c30ddb9fb4b91d/5DBB09BB/t51.2885-19/s150x150/50837229_2271824569767554_9120237429557559296_n.jpg?_nc_ht=instagram.fkin2-1.fna.fbcdn.net"
                alt="avatar"
                className="avatar-img"
                style={{height: '300px', borderRadius: '50%' }}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Shamar Moore</h2>
            <h4 style={{color: 'grey'}}>Jr Web Developer</h4>
            <hr style={{borderTop: '3px solid #000000', width: '100%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #000000', width: '100%'}}/>
            <h5>Address</h5>
            <p>3 Righton Drive Washington Gardens, Kingston Jamaica</p>
            <h5>Phone</h5>
            <p>(876) 781-2016</p>
            <h5>Email</h5>
            <p>shamar.alex.moore@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #000000', width: '100%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education startYear={2013}
              endYear={2019}
              schoolName= "Jamaica College"
              schoolDescription = "Jamaica College is a public, Christian, secondary school and sixth form for boys in Kingston, Jamaica. It was established in 1789 by Charles Drax. It provides traditional classroom education to its students in a variety of subject areas and caters to students aged 10 to 19 years."
             />
             <hr style={{borderTop: '3px solid #e22947'}} />
             
             <h2> Experience </h2>
            
             <Experience 
            startYear={2018}
              endYear={2018}
              jobName= "First Job"
              jobDescription= "Jamaica Constabulary Force -Half Way Tree Police Station (Filing Clerk) July 2018 – August 2018  during my time there I offered wide array of skills and fresh ideas with experience in organizing, documenting, planning and implementing clerical resources with focus on productivity and cost efficiency. Ability to thrive in high-pressure and deadline-driven environments, complying with strict policies, procedures and regulations."
          />
          <hr style={{borderTop: '3px solid #e22947'}} />
          <h2>Skills</h2>
           <Skills
                skill="Javascript"
                  progress={80}
                />
                <Skills
                  skill="HTML/CSS"
                    progress={80}
                  />
                  <Skills
                    skill="Digital Media"
                    progress={80}
                    />
                    <Skills
                      skill="React"
                    progress={25}
                      />
                      <Skills
                        skill="Typing"
                    progress={100}
                        />
                       <hr style={{borderTop: '3px solid #e22947'}} />
                       <h2> Qualifications </h2>
                       <h3> CSEC </h3> 
                       <p> Grade and Profile Descriptions
                       The overall grade and profile descriptions are:

                         Overall Grades

                       GRADE I: Candidate shows a comprehensive grasp of the key concepts, knowledge, skills andcompetencies required by the syllabus.
                       GRADE II: Candidate shows a good grasp of the key concepts, knowledge, skills and competencies required by the syllabus.
                       GRADE III: Candidate shows a fairly good grasp of the key concepts, knowledge, skills and abilities required by the syllabus.
                       GRADE IV: Candidate shows a moderate grasp of the key concepts, knowledge, skills and competencies required by the syllabus.
                       GRADE V: Candidate shows a limited grasp of the key concepts, knowledge, skills and competencies required by the syllabus.
                       GRADE VI: Candidate shows a very limited grasp of the key concepts, knowledge, skills and competencies required by the syllabus.</p>
                       
                       <h4>Mathematics - Grade II</h4>
                       <h4>English - Grade II</h4>
                       <h4>Chemistry - Grade II</h4>
                       <h4>Biology - Grade I</h4>
                       <h4>Geogrpahy - Grade III</h4>
                       <h4>Principles of Buinsses - Grade I</h4>
                       <h4>Electronic Document Preperation Management - Grade 1</h4>
                       <h3>CAPE</h3>
                       <p> The Caribbean Advanced Proficiency Examination(CAPE) is designed to provide certification of the academic, vocational and technical achievement of students in the Caribbean who, having completed a minimum of five years of secondary education, wish to further their studies.The examinations address the skills and knowledge acquired by students under a flexible and articulated system where subjects are organized in one - Unit or two - Unit courses with each Unit containing three Modules.Subjects examined under CAPE may be studied concurrently or singly. </p>
                        <h4>Communication Studies - Grade (Pending)</h4>
                        <h4>Chemistry - Grade (Pending)</h4>
                        <h4>Biology - Grade (Pending)</h4>
                        <h4>Digital Media - Grade (Pending)</h4>
                        <h4>Animation and Game Design - Grade (Pending)</h4>


          </Cell>
          </Grid>
          </div>
        )    
    }
} 

export default Resume