import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadApi() {
      const response = await api.get('r-api/?api=filmes');
      setFilmes(response.data);
    }
    loadApi();
  }, [])


  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((item) => {
          return (
            <section key={item.id} >
              <strong>{item.nome}</strong>
              <p>{item.sinopse}</p>
              <img src={item.foto} alt={item.nome} />
              <Link to="/">Acessar</Link>
            </section>

          );
        })}
      </div>
    </div>
  );
}