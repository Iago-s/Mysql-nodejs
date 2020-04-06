const express = require('express');
const app = express();

const Cadastro = require('./database/models/Cadastro');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const handlebars = require('express-handlebars');
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/list', (request, response) => {
  Cadastro.findAll().then(cadastros => {
    response.render('list', { cadastros: cadastros });
  });
});

app.get('/', (request, response) => {
  response.render('filmes');
});

app.post('/add', (request, response) => {
  Cadastro.create({
    title: request.body.title,
    description: request.body.description
  }).then(() => {
    response.redirect('/list');
  }).catch((err) => {
    response.send('Erro ao enviar ao banco de dados.', err);
  });
});

app.get('/delete/:id', (request, response) => {
  Cadastro.destroy({
    where: {
      'id': request.params.id
    }
  }).then(() => {
    response.send('Filme deletado com sucesso!');
  }).catch((err) => {
    response.send('Filme não encontrado.', err);
  });
});

app.listen(8081, () => {
  console.log('Server started: http://localhost:8081');
});