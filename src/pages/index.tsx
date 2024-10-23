import { useState, useCallback } from "react";
import { Button, Container, H2, Input, Li, Ul } from "./ListaDeTarefas/styles";

export function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState<string[]>([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  // Função para adicionar uma nova tarefa à lista, memorizada pelo useCallback
  const adicionarTarefa = useCallback(() => {
    if (novaTarefa.trim() !== "") {
      setTarefas((prevState) => [...prevState, novaTarefa]);
      setNovaTarefa("");
    }
  }, [novaTarefa]); // A função será recriada se novaTarefa mudar

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
}
