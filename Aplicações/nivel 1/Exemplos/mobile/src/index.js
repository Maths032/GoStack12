import React, {useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import api from './services/api.js';


export default function App(){

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {

      setProjects(response.data);
    })
  },[]);
  
  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `novo projeto ${Date.now()}`,
      owner: 'Matheus Ramos/'   
    });

    const project = response.data

    setProjects([...projects, project])
    
  }


  return ( 
    <>
    <StatusBar backgroundColor='#7159c1' barStyrle='red'/>
    <SafeAreaView style={style.container}>
    <FlatList 
      data={projects}
      keyExtractor={project => project.id}
      renderItem={({item:project }) => (
        <Text style={style.project}>{project.title}</Text> 
      )}
    
    />

    <TouchableOpacity 
      activeOpacity={0.6} 
      style={style.button} 
      onPress={handleAddProject}
    >
       <Text style={style.buttonText}>Adicionar projeto</Text>
    </TouchableOpacity>
    </SafeAreaView>
  
    {/* <View style={style.container}>

        {projects.map(project => ( 
           <Text style={style.project} key={project.id}>{project.title}</Text> 
      ))}

    </View>  */}
    </>
  )
    
}




const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1'
  },
  project: {
    color: '#fff',
    fontSize: 20, 
  },
  button: {
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  }
})