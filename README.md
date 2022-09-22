<h1 align="center"><strong>Desafio Técnico LinkLei</strong></h1>

<br/>
<h3 align="center">O desafio proposto consiste em um projeto Fullstack de um feed simulando uma rede social, onde é possível o usuário cadastrar novas publicações, edita e deletar publicações já existentes. </h3>

<br/>
<h3 align="center">
    <a href="#features">Features</a> •
    <a href="#pré-requisitos">Pré-requisitos</a> •
    <a href="#tecnologias">Tecnologias</a> •
    <a href="#autor">Autor</a>
</h3>

## <strong>Features</strong>

<br/>

### <strong>Features da aplicação Backend</strong>

<br/>

- [x] - Criação de uma publicação;<br/>
- [x] - Listagem de todas as publicações cadastradas no banco de dados;<br/>
- [x] - Recupera uma publicação a partir da Id da publicação;<br/>
- [x] - Atualiza uma publicação a partir da Id da publicação;<br/>
- [x] - Exclui uma publicação a partir da Id da publicação;<br/>
    <br/>
    <br/>

### <strong>Features da aplicação Frontend</strong>

<br/>

- [x] - Visualizar publicações no feed;<br/>
- [x] - Modal para novas publicações no header do feed.<br/>
  - [x] - Nome do autor, tipo de publicação e conteúdo da publicação são obrigatório, imagem é opcional e são aceitas apenas imagens nos formatos png e jpg.<br/>
- [x] - Menu de opções no card da publicação;<br/>
  - [x] - Modal para edição da publicação;<br/>
    - [x] - Carrega as informações da publicação a ser editada nos campos do modal;
  - [x] - Modal para excuir a publicação;<br/>
- [x] - Todas as fetures são responsivas para dispositivos mobile
    <br/>
    <br/>
    <br/>
    <br/>

### <strong>Feed Home Page - Desktop</strong>

<img src="./github/feed/feed-home-desktop.png" width="1024px">
<br/>
<br/>
<br/>

### <strong>Feed Home Page - Mobile</strong>

<img src="./github/feed/feed-home-mobile.png">
<br/>
<br/>
<br/>

### <strong>Criar Post</strong>

<img src="./github/feed/modal-criar-post-preenchido.png">
<br/>
<br/>
<br/>

### <strong>Edição de Post</strong>

<img src="./github/feed/modal-update-post.png">
<br/>
<br/>
<br/>

### <strong>Excluir Post</strong>

<img src="./github/feed/modal-delete-post.png">
<br/>
<br/>
<br/>

### <strong>Erros de preenchimento das infos</strong>

<img src="./github/feed/modal-errors.png">
<br/>
<br/>
<br/>

## <strong>Pré-requisitos</strong>

Antes de começar você vai precisar ter instalados em sua máquiana as seguintes ferramentas:<br/>

- [x] [Git](https://git-scm.com)<br/>
- [x] [Docker](https://docs.docker.com/engine/install/)<br/>
- [x] [Docker Compose](https://docs.docker.com/compose/install/)<br/>
- [x] [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)<br/>

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### <strong>Como rodar a aplicação</strong>

```bash
# Clone este repositório
$ git clone git@github.com:ricciardi305/teste-linklei.git

# entre na raiz do projeto clonado
$ cd tests-linklei

# entre na pasta do front-end
$ cd feed

# instale as dependências

# Gere o container no docker (se você ainda não tiver a imagens do node e postgres, o docker pode demorar um pouco para inicializar)
$ sudo docker compose up --build

#

```
