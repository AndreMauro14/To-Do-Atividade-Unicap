import { useState } from 'react';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  function adicionarTarefa() {
    if (input.trim()) {
      setTarefas([...tarefas, input]);
      setInput("");
    }
  }

  function removerTarefa(indexParaRemover) {
    const novasTarefas = tarefas.filter((_, index) => index !== indexParaRemover);
    setTarefas(novasTarefas);
  }

  return (
    <div className="app-container">
      <h1>Minha Lista de Tarefas</h1>
      
      <div className="input-section">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Digite uma tarefa..." 
        />
        <button className="btn-add" onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <ul className="task-list">
        {tarefas.map((tarefa, index) => (
          <li key={index} className="task-item">
            <span>{tarefa}</span>
            <button className="btn-delete" onClick={() => removerTarefa(index)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;