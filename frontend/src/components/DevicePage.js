import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DevicePage() {
  const { id } = useParams();
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/device/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na resposta da API');
        }
        return response.json();
      })
      .then(data => setTopics(data))
      .catch(error => {
        console.error('Erro ao buscar tópicos:', error);
        setError(error.message);
      });
  }, [id]);

  if (error) {
    return <p>Erro: {error}</p>;
  }

  if (topics.length === 0) {
    return <p>Nenhum tópico encontrado.</p>;
  }

  return (
    <div>
      <h1>Tópicos e Subtópicos</h1>
      {topics.map(topic => (
        <div key={topic.name}>
          <h2>{topic.name}</h2>
          {topic.image && <img src={topic.image} alt={topic.name} />}
          
          {topic.subtopics && topic.subtopics.map(sub => (
            <div key={sub.name}>
              <p>{sub.name}</p>
              {sub.image && <img src={sub.image} alt={sub.name} />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default DevicePage;
