<h1 align="center"><strong>BackEnd Desafio Técnico LinkLei</strong></h1>

<br/>
<h3 align="center">Esta é a documentação da api do desafio full-stack da LinkLei, utilizando php 8 e Laravel 9</h3>

<br/>

## Listagem (Get)

Lista todos os posts cadastrados no banco de dados utilizando o endpoint:

```
Get /posts - FORMATO DA RESPOSTA - status 200
```

```json
[
    {
        "id": 2,
        "name": "Rafael Mendes",
        "postType": "Grupo",
        "postContent": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "created_at": "2022-09-24T16:18:30.000000Z",
        "updated_at": "2022-09-24T17:54:38.000000Z",
        "postImage": ""
    },
    {
        "id": 3,
        "name": "Rafael Ricciardi",
        "postType": "Grupo",
        "postContent": "Lorem ipsum dolor ....",
        "created_at": "2022-09-24T16:18:30.000000Z",
        "updated_at": "2022-09-24T16:49:59.000000Z",
        "postImage": ""
    },
    {
        "id": 4,
        "name": "Rafael",
        "postType": "Artigo",
        "postContent": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "created_at": "2022-09-24T16:18:30.000000Z",
        "updated_at": "2022-09-24T16:47:11.000000Z",
        "postImage": ""
    },
    {
        "id": 5,
        "name": "Rafael Mendes",
        "postType": "Grupo",
        "postContent": "Lorem ipsum dolor ....",
        "created_at": "2022-09-24T16:18:31.000000Z",
        "updated_at": "2022-09-24T16:18:31.000000Z",
        "postImage": ""
    }
]
```

</br>
Acessa um post específico a partir do id utilizando o endpoint:

```
Get /posts/{id} - FORMATO DA RESPOSTA - status 200
```

```json
[
    {
        "id": 1,
        "name": "Rafael Mendes",
        "postType": "Grupo",
        "postContent": "Lorem ipsum dolor ....",
        "created_at": "2022-09-24T16:14:26.000000Z",
        "updated_at": "2022-09-24T16:14:26.000000Z"
    }
]
```

## Rotas de criação (Post)

Cadastra uma nova publicação:

```
Post /post - FORMATO DA REQUISIÇÃO - multipart/form-data
```

```json
{
    "name": "Rafael Mendes",
    "postType": "Grupo",
    "postContent": "Lorem ipsum dolor ....",
    "postImage": Arquivo de imagem com extençoes jpg ou png
}
```

Caso tudo dê certo, a resposta será assim:

```
Post /posts - FORMATO DA RESPOSTA - status 201
```

```json
{
    "name": "Rafael Mendes",
    "postType": "Grupo",
    "postContent": "Lorem ipsum dolor ....",
    "postImage": "850c2648ab1fe92e4edee08f22e0a37a.jpg",
    "updated_at": "2022-09-24T22:08:20.000000Z",
    "created_at": "2022-09-24T22:08:20.000000Z",
    "id": 31
}
```

<img src="./github/server/Captura%20de%20tela%20de%202022-09-22%2011-44-38.png"/>
</br>

## rota de edição (Put)

Pode editar o conteúdo, nome do autor e tipo de publicação (funcionalidade de alterar imagem ainda não implementada)

```
Put /posts/{id} - FORMATO DA REQUISIÇÃO
```

```json
{
    "name": "Rafael Ricciardi",
    "postType": "Artigo",
    "postContent": "Artigo editado"
}
```

Caso tudo dê certo, a resposta será assim:

```
Put /posts/{id} - FORMATO DA RESPOSTA - status 209
```

```json
{
    "message": "Post successfully updated"
}
```

## Excluir publicação (Delete)

Pode pode excluir uma publicação

```
Delete /posts/{id} - FORMATO DA REQUISIÇÃO
```

```json
Sem corpo de requisição
```

Caso tudo dê certo, a resposta será assim:

```
Delete /posts/{id} - FORMATO DA RESPOSTA - status 209
```

```json
{
    "message": "Post successfully deleted"
}
```
