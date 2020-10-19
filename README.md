## MobFlix

### Aplicação utilizando o Parse Server + Node.js que possibilita o cadastramento de filmes, listagem dos filmes, ~~atualização dos filmes~~ e busca

Comandos:

```
npm install
npm run dev
npm run build
npm start

```

As variáveis de configuração estão no arquivo `config.json`

#### Rotas

```
user/signup - Cadastra um usuário na aplicação
user/auth - Gera o token necessário para as demais rotas

movie/ - Lista todos os filmes
movie/show - Busca os filmes por Título ou Data de Lançamento
movie/create - Cadastra um filme

```
