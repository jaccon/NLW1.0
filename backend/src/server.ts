import express from 'express';

const app = express();
app.use(express.json());

const users = [
  'André Jaccon',
  'Tatiane',
  'Bianca'
];

app.get('/users', (request, response)=> {

  const search = String(request.query.search);
  const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

  response.json(filteredUsers);


});

app.get('/users/:id', (request, response) => {  
  const id = Number (request.params.id);

  const user = users[id];

  return response.json(user);

});

app.post('/users', (request, response)=> {

  const { name, email } = request.body;

  console.log (request.body);

  return response.json({
    name,
    email
  })
});

app.listen(3333);

