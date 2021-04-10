import React,{useState,useEffect} from 'react';


export default function Favoritos() {
  const[filmes,setFilmes] = useState([]);

  useEffect(()=>{
   async function loadFavoritos(){
      const filmesSalvo = await localStorage.getItem('@filmes');
      let filmeFav = JSON.parse(filmesSalvo);

      setFilmes(filmeFav);
    }
    loadFavoritos();
  },[])
  return (
    <div>
      <h1>Favoritos ... </h1>
      {filmes.map((item)=>{
        return(
          <div>

          <h1>{item.nome}</h1>
          </div>
        )
      })}
    </div>
  );
}