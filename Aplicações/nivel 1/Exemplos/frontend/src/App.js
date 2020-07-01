


import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import './App.css';
import api from './services/api'

function App(){
 
  const  [ projects, setProjects ] = useState([])

  useEffect(() => {

    api.get('projects').then(response => {
      setProjects(response.data)
    })
  }, [])

  function handleAddProject (){ 
  //projects.push(`Novo Projeto, ${Date.now()}`)

  // setProjects([...projects, `Novo Projeto, ${Date.now()}`])
  api.post('projects', {
      title: `Novo Projeto, ${Date.now()}`,
      owner: "MAtheus eu acho"
    }).then(response => {
      setProjects([...projects, response.data])
    })
    
    // const project = response.data;
    // setProjects([...projects, project])

  }



  return (
   <>
    <Header title="list1"/>
    
    <ul>
    { projects.map(project => <li key={project.id}>{project.title}</li>) }
    </ul>

     <button type="button" onClick={handleAddProject}>Add Project</button>
    </>
  );
};

export default App