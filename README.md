## Arquivo de Configuração .env
O arquivo .env deve conter as seguintes variáveis de ambiente para configuração do banco de dados e outros parâmetros da aplicação:

```bash
{
    DB_NAME=''
    DB_USER=''
    DB_PASSWORD=''
    DB_HOST=''
    DB_DIALECT=''
    PORT=0000
    TOKEN_SECRET=''
    TOKEN_SECRET_SESSION='dev'
}
```
Observações:

`DB_DIALECT`: Informe o dialeto do banco de dados que você está usando (por exemplo, mysql, postgres, sqlite).
`TOKEN_SECRET` e `TOKEN_SECRET_SESSION` são usados para autenticação e devem ser definidos adequadamente.

## Estrutura dos Endpoints

1. Usuário
Endpoint: POST /users
```bash
{ 
    "user_id": "Jack",
    "username": "Jack",
    "email": "jack@teste.com", 
    "password": "123", 
    "role": "ADM" ,
}
```
`role`: Papel do usuário (ex: ADM, USER).

2. Postagem
Endpoint: POST /posts
```bash
{
    "post_id": "", 
    "title": "", 
    "content": "", 
    "user_id": "", 
    "published_at": ""
}
```

3. Categoria
Endpoint: POST /categories
```bash
{
    "category_id": "", 
    "name": "", 
    "description":  ""
}
```

4. Comentário
Endpoint: POST /comments
```bash
{
    "content_id": "",
    "content": "",
    "post_id": "",
    "user_id": ""
}
```

5. Tag
Endpoint: POST /tags
```bash
{
    "tag_id": "",
    "name": ""
}
```