# Teste-Backend-Celso

## Para rodar a aplicação
- npm i
- npm run dev

## Endpoints
### Produtos
- GET - http://localhost:3000/product/all
- POST - http://localhost:3000/product/create -> Informações necessárias para cadastrar	o produto -> "name", "category", "quantity"
- PUT - http://localhost:3000/product/create -> Apenas o campo Id é obrigatório, os outros são opcionais, e o campo de updated_at é preenchido automaticamente pelo sistema no DB
- POST - http://localhost:3000/product/remove -> Informações necessárias para "deletar"	o produto -> "id"
"Observação sobre a rota de remoção: Como o objetivo não é retirar o produto do banco de dados, mas sim apenas alterar a coluna deleted_at, resolvi fazer em um método POST."
