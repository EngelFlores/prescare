const express = require('express')

const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')
const acolhido = require('./public/js/acolhido.js')
const Sequelize = require('sequelize')
const PORT = process.env.PORT || 3000
const DB_NAME = 'prescare'
const DB_USER = 'postgres'
const DB_PASSWORD = 'prescare'
const DB_HOST = 'localhost'

const startApplication = () => {

  const app = express()

  app
    .use(expressLayouts)
    .use(express.static(__dirname + '/public/'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => {
      res.render('home')
    })
    .get('/about', (req, res) => {
      res.render('about', { usuario: user })
    })
    .get('/login', (req, res) => {
      res.render('pages/login')
    })
    .get('/acolhido', (req, res) => {
      res.render('pages/info', { acolhido: acolhido })
    })
    .get('/pesquisar', (req, res) =>{
      res.render('pages/pesquisaAcolhidos')
    })
    .listen(PORT, () => console.log('Servidor iniciado em http://localhost:' + PORT))
    }

  const databaseClient = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
      host: DB_HOST,
      dialect: 'postgres'
  }) 

databaseClient
 .sync()
 .then(startApplication)
 .catch(console.log)