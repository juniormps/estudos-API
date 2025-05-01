const express = require('express')  //Chama o Express
const app = express()  //Ativa o Express

app.use(
    express.urlencoded({
      extended: true,
    }),
  )
  
  app.use(express.json())
  
  app.get('/', (req, res) => {
    res.json({ message: 'Primeira rota criada com sucesso!' })
  })
  
  app.listen(3000)