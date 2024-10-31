## Lista de tarefas usando React hook useCallback

### O que é e para que serve o useCallback
O useCallback é um react rook que serve para armazenar funções em cache, otimizando o desempenho de componentes e evitando que esse seja reenderizado desnecessariamente em uma aplicação.


### Passo a passo construção do código 
### 1. Importação de Dependências

import React, { useState, useCallback } from 'react';

- Importando React, o hook useState para gerenciar o estado do componente e o useCallback para memorizar funções.
<hr>

### 2. Definição do Componente ListaDeTarefas

function ListaDeTarefas() {}

- Criamos o componente funcional ListaDeTarefas, que será responsável por exibir a lista de tarefas e permitir a adição de novas.
<hr>

### 3. Declaração dos Estados

const [ tarefas, setTarefas ] = useState([])<br>
const [ novaTarefa, setNovaTarefa ] = useState('')

- tarefas : é um estado que armazena uma lista de tarefas, inicialmente definida como um array vazio.
- novaTarefa : é um estado que armazena o valor atual do input, onde o usuário digita a nova tarefa. Começa como uma string vazia.
<hr>

### 4. Função adicionarTarefa com useCallback

- useCallback memoriza a função adicionarTarefa para que ela só seja recriada quando a variável novaTarefa mudar.
- A função adicionarTarefa faz o seguinte:  Verifica se novaTarefa não é uma string vazia após remover espaços extras com 'trim()'.
- Usa setTarefas para atualizar a lista de tarefas, adicionando a nova tarefa ao array existente. O uso de (prevState) => [...prevState, novaTarefa] garante que o estado seja atualizado de forma segura com base no valor anterior.
- setNovaTarefa("") -> limpa o campo novaTarefa,  definindo-o como uma string vazia para que o input seja resetado.
<hr>

### 5. Renderização do JSX 

```ts
 return (
    <Container>
      <H2>Lista de Tarefas</H2>
      <Input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <Button onClick={adicionarTarefa}>Adicionar Tarefa</Button>
      <Ul>
        {tarefas.map((tarefa, index) => (
          <Li key={index}>{tarefa}</Li>
        ))}
      </Ul>
    </Container>
  );
```

- O JSX renderiza uma estrutura de entrada para gerenciar a lista de tarefas:
- Um ( input ) para o usuário digitar a nova tarefa. O valor do input é controlado pelo estado novaTarefa, e a função onChange atualiza esse estado conforme o usuário digita.
- Um ( button ) que chama a função adicionarTarefa ao ser clicado, adicionando a nova tarefa à lista.
- Um ( ul ) que mapeia o array tarefas e renderiza cada tarefa em um ( li ). Cada item recebe uma chave (key) com o índice para identificar os elementos de forma única.
<hr>

 
### 6. Explicação do useCallback no Contexto

- Sem o useCallback, a função adicionarTarefa seria recriada em cada renderização do componente, o que pode ser ineficiente, especialmente se a função for passada como prop para componentes filhos.
- Ao usar useCallback, a função é recriada apenas quando a dependência novaTarefa mudar, o que melhora o desempenho do componente em situações mais complexas.
- Esse fluxo completo permite ao usuário adicionar tarefas à lista de forma eficiente, com a função de adição sendo otimizada pelo uso do useCallback.





































