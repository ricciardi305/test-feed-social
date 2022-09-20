import { app } from './app';

const port = process.env.PORT ||3000;

app.listen(port)
console.log(`Seridor rodando em http://localhost:${port}`);

