const Project = require('../models/projects.model.js')
const Q = require('q')

const getProjects = (req, res) => {
  const Projects = Q.nbind(Project.find, Project)

  Projects({})
    .then((response) => {
      res.json({ data: response })
    })
    .catch((error) => {
      console.log('failed get, in /projects')
      res.status(400).send(error)
    })
}

const postProjects = (req, res) => {
  const Projects = Q.nbind(Project.create, Project)

  Projects({
    title: req.body.title,
    about: req.body.about,
    keywords: req.body.keywords,
    url: req.body.url
  })
    .then(() => {
      res.status(200).json({'success': true})
    })
    .catch((error) => {
      console.log('failed post, in /projects')
      res.status(400).json({error: error})
    })
}

exports.projects = {
  get: getProjects,
  post: postProjects
}
