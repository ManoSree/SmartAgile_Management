import React from 'react';
import './Projects.css'; // Adjust the path to where your CSS file is located
import Smart_agile from '../Project/Smart_agile.png';
import Eye_point from '../Project/Eye_point.png';
import e_vision from '../Project/e_Vision.png';
import Logishare from '../Project/Logishare.png';
import Team_member from '../Project/Team_members.png';

const Project = () => {
  return (
    <div className="projects-grid">
      <div className="card mb-3 project-card" style={{ maxWidth: '300px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '10px' }}>
          <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
            <img src={Smart_agile} alt="smart_agile" className='project-img' />
            <b className='title'>SMARTAGILE</b>
          </div>
          <p className='desc'>“AI Driven Tool for Optimal workspace productivity”</p>
          <p className='project-desc'>SmartAgile, a comprehensive suite of software applications, transforms workplace productivity and Agile project management through innovative AI technology.</p>
          <img src={Team_member} alt="Team_member" className='team'/>
        </div>
        <div className='deadline'>
          Deadline : {"05/07/2024"}
        </div>
      </div>
      <div className="card mb-3 project-card" style={{ maxWidth: '300px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '10px' }}>
          <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
            <img src={Eye_point} alt="Eyepoint" className='project-img' />
            <b className='title'>EYEPOINT</b>
          </div>
          <p className='desc'>“Vision Meets Interaction”</p>
          <p className='project-desc'>EyePoint is a revolutionary technology that unlocks the secrets of the human gaze, turning eye movements into powerful insights. </p>
          <img src={Team_member} alt="Team_member" className='team1' />
        </div>
        <div className='deadline'>
          Deadline : {"05/07/2024"}
        </div>
      </div>
      <div className="card mb-3 project-card" style={{ maxWidth: '300px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '10px' }}>
          <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
            <img src={e_vision} alt="e_vision" className='project-img' />
            <b className='title'>EVISION</b>
          </div>
          <p className='desc'>“Just a glance for accuracy”</p>
          <p className='project-desc'>Attendance Tracker is more than just an attendance system; it's a gateway to a smarter, more efficient future.</p>
          <img src={Team_member} alt="Team_member" className='team2' />
        </div>
        <div className='deadline'>
          Deadline : {"05/07/2024"}
        </div>
      </div>
      <div className="card mb-3 project-card" style={{ maxWidth: '300px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '10px' }}>
          <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
            <img src={Logishare} alt="Logishare" className='project-img' />
            <b className='title'>LOGISHARE</b>
          </div>
          <p className='desc'>“Revolutionary system in transportation of goods”</p>
          <p className='project-desc'>It's a collaborative network unlocking the hidden potential of unused space in vehicles by renting the space to others to transport their goods.</p>
          <img src={Team_member} alt="Team_member"  className='team3'/>
        </div>
        <div className='deadline'>
          Deadline : {"05/07/2024"}
        </div>
      </div>
    </div>
  );
};

export default Project;



