
import './App.css';
import Header from './components/Header/Header';
import Project from './components/Project/Project';
import Dashboard from './components/Dashboard/Dashboard'
import Sidebar from './components/SideBar/Sidebar';
import TaskHub from './components/Task Hub/TaskHub'
import Chat from './components/Chat/Chat'
import Settings from './components/Settings/Setting'
import {  Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
<Header/>
<Sidebar/>
    
 <Routes>
        
  <Route path="/" element={<Dashboard />} />
  <Route path="/project" element={<Project />} />
  
  <Route path="/Taskhub" element={<TaskHub />} />
  <Route path="/Chat" element={<Chat />} />
  <Route path="/setting" element={<Settings />} />
</Routes>

    </div>
  );
}

export default App;
