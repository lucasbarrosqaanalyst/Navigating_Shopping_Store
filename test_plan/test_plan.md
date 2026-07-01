# 📋 Plano de Testes

## 1. Introdução
Este plano de teste foi elaborado para detalhamento de alguns fluxos de atividades conhecidos e explorados pelo QA dentro do e-commerce fictício automationteststore. O detalhamento será apresentado por cenários e casos de testes descritos no padrão BDD.

## 2. Objetivos
- ✅ Verificar requisitos funcionais
- ✅ Identificar defeitos precocemente
- ✅ Garantir qualidade do produto
- ✅ Descrever detalhamente alguns cenários de atividades

## 3. Tipos de Testes
|    Tipo     | Descrição | Técnica |
|-------------|-----------|---------|
|   Unitário  | Componentes individuais | Automático |
| Integração | Interfaces módulos | Automático |
| Sistema | Sistema completo | Manual |
| Aceitação | Validação usuário | Manual |


Dado que o usuário esteja logado no sistema
E que ele esteja na tela inicial do site
Quando ele visualizar algum produto na seção FEATURED
E clicar no carrinho de compras abaixo dele
Então o produto será adicionado uma vez ao carrinho de compras do site.

Dado que o usuário esteja logado no sistema
E que ele tenha clicado em algum produto da seção FEATURED
Quando ele clicar no campo Qty
E preencher a quantidade de itens que ele gostaria
E clicar em Add to Cart
Então o usuário será direcionado à página do carrinho de compras, já com o produto inserido e a quantidade inserida anteriormente.


Dado que o usuário esteja logado no sistema
E que ele esteja na página do carrinho de compras
Quando ele localizar algum produto no carrinho
E clicar no ícone de remover produto
Então o produto será removido do carrinho de compras


Dado que o usuário esteja logado no sistema
E selecione algum prooduto pelo nome
Quando a página do produto for carregada
Então o usuário deverá encontrar dados do produto clicado, como a descrição do produto, os reviews, o preço, o campo de quantidade a inserir, o valor total, o botão de adicionar ao carrinho e botão de adicionar à lista de desejos.


