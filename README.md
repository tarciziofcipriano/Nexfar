# PROJETO NEXFAR
 
Um simples programa mostrando uma tela básica de compras.

## Instruções

Para o back-end, instale as dependências via terminal:
```bash
npm install
```

Ou instale pelo o comando:

```bash
yarn
```

Execute o programa:
```bash
npm start
```

Ou execute pelo o comando:

```bash
yarn start
```

Abra via server de desenvolvimento para rodar via react.
```bash
REACT_APP_API_URL= http://localhost:3000
```

## Desafios e problemas:
```bash
A tela dos produtos no momento está zerando automaticamente após iniciar algum outro evento, mantive assim pois tive dificuldades em não zerar as informações.
```

```bash
Por causa de alguns conflitos na Ordenação de A-Z e a Exibição dos itens (quantidade de produtos que irá aparecer na tela), resolvi somente implementar a interface.
```

## Melhorias:
```bash
Aprimoramento do visual da barra de pesquisa, de uma forma que economiza os espaçamentos da parte superior da tela.
```

```bash
Implementação de botões no carrinho de aumentar ou diminuir a quantidade de cada item e remover (um item específico), forma utilizada também em outras plataformas conhecidas no varejo de compras, assim não precisou implementar a função de limpar totalmente o carrinho.
```