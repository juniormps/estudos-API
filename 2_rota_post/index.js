const express = require('express')  //Chama o Express
const app = express()  //Ativa o Express

app.use(
    express.urlencoded({
      extended: true,
    }),
  )
  
  app.use(express.json())
  
  // Rotas/Endpoints
  app.post('/createproduct', (req, res) => {
    const name = req.body.name
    const price = req.body.price

    console.log(name)
    console.log(price)

    //Aqui iria os códigos que enviariam os dados para o banco de dados

    res.json({ message: `O produto ${name} foi criado com sucesso!` })
  })

  app.listen(3000)