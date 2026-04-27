# Atividade A06 - Introdução ao React

Este projeto é uma aplicação de lista de tarefas (To-Do List) desenvolvida como parte da disciplina de Introdução ao React no curso de Sistemas para Internet da UNICAP (Embarque Digital).

### JSX
O JSX é uma extensão de sintaxe que permite escrever estruturas semelhantes ao HTML dentro do JavaScript. Diferente do HTML puro, o JSX permite a execução de expressões lógicas e a injeção de variáveis diretamente na interface através de chaves `{ }`. Ele é convertido para JavaScript puro para que o navegador possa interpretá-lo.

### Componentização
A aplicação foi estruturada seguindo o conceito de componentes, que são blocos de código independentes e reutilizáveis. Isso facilita a manutenção e a escalabilidade da interface, permitindo que cada parte gerencie sua própria lógica e aparência.

### Hook useState
O `useState` foi utilizado para gerenciar a reatividade da aplicação. Ele cria um estado para armazenar a lista de tarefas e o valor do input. Sempre que o estado é alterado via função de atualização (ex: `setTarefas`), o React renderiza novamente o componente de forma eficiente para refletir as mudanças na tela.

### Manipulação de Arrays
- Para **adicionar** itens, utilizamos o *Spread Operator* (`[...]`) para criar um novo array. 
- Para **remover** itens, utilizamos o método `.filter()`, que retorna um novo array excluindo o elemento cujo índice foi selecionado pelo usuário.

---

## 🛠️ Tecnologias
- React.js
- Vite
- JavaScript (ES6+)
- CSS3

## 🏁 Execução Local
1. Instale as dependências:
   ```bash
   npm install
