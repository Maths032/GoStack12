const express = require('express');
const cors = require('cors')
const projects = [];
const { uuid, isUuid } = require('uuidv4')
const app = express();
app.use(cors())
app.use(express.json())


function logRequest(request, response, next) {
  const { method, url } = request;//buscar um metodo e uma url de dentro de uma requisição 

  const logLabel = `[${method.toUpperCase()}] ${url}`

  console.log(logLabel)

return next()  
}


function validate(request, response, next) {
  const { id } = request.params

  if (!isUuid(id)) {
    return response.status(400).json({error: "ID INVALIDO"})
  }

  return next();
}




app.get('/projects', (request, response) => {
  const { title } =  request.query
  
  const results = title 
    ? projects.filter(project => project.title.includes(title))
    : projects;


  return response.json(results)
});





app.post('/projects', (request, response) => {
// request body

  const { title, owner} = request.body
  const project = { id: uuid(), title, owner}
  projects.push(project)

  return response.json(project)
})




app.put('/projects/:id', validate, (request, response) => {
// route parms

  const { id } = request.params

  const { title, owner } = request.body
  const project = {
    id,
    title,
    owner
  };

 const projectIndex = projects.findIndex(Project => project.id === id)
  


 if(projectIndex < 0){ 
    return response.status(400).json({error: "project not found"});
  }

  projects[projectIndex] = project
  
  return response.json(project )

})



app.delete('/projects/:id', validate, (request, response) => {
// route parms
const { id } = request.params

const project = {id };

const projectIndex = projects.findIndex(Project => project.id === id)  


if(projectIndex < 0){
  return response.status(400).json({error: "project not found"});
}
  projects.splice(projectIndex, 1)

  return response.status(200).json({ sucess: "project deleted" })
})





app.listen(3333, () => {
  console.log('backend Started! ')
});
