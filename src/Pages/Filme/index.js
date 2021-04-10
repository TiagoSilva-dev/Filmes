import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './filme-info.css';
import api from '../../services/api';
import { toast } from 'react-toastify';

export default function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    async function buscaFilme() {
      const response = await api.get(`r-api/?api=filmes/${id}`);
      setFilme(response.data);
      setLoading(false);
    }
    buscaFilme();

  }, [id]);

  function salvaFilme() {
    const minhaLista = localStorage.getItem('@filmes'); // recebendo oq esta salvo no storage
    let filmesSalvos = JSON.parse(minhaLista) || []; // se houver alguma coisa no storage , vai ser convertido e salvo
    // se tiver algum filme com esse mesmo id , precisa ignorar
    const hasFilme = filmesSalvos.some((filmeSalvos) => filmeSalvos.id === filme.id);

    if (hasFilme) {
     toast.info('Voce Já possui este filme salvo!');
      return;
    }
    filmesSalvos.push(filme);
    localStorage.setItem('@filmes', JSON.stringify(filmesSalvos));
   toast.success('Filme Salvo com sucesso! ');
  }

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando seu filme ... </h1>
      </div>
    )
  }


  return (
    <div className="filme-info">
      <section key={filme.id}>
        <strong>{filme.nome}</strong>
        <p>{filme.sinopse}</p>
        <img src={filme.foto} alt={filme.nome}></img>
        <div className="botoes">
          <button onClick={salvaFilme}>Salvar</button>
          <button>
            <a target="blank" href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer`}>Trailer</a></button>
        </div>

      </section>
    </div>
  );
}