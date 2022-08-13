import React, {useEffect, useState} from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const Game = () => {
    const [game, setGame] = useState({});
    const [count, setCount] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/games/${id}`)
        .then((res)=> {
            console.log(res.data);
            setGame(res.data.game);
        })
        .catch((err) => console.log("issue in get single game by id",err))
    }, [id])

    const deleteGame = (gameId) => {
      axios.delete(`http://localhost:8000/api/games/${id}`)
      .then((res) => {
        navigate('/')
      })
      .catch((err) => console.log('get game by id error', err))
    };

    const counter = () => {
      setCount((count) => count + 1)
      console.log('button clicked', count)
    }

  return (
    <div>
        <h2>{game.title}</h2>
        <img src={game.boxArt} alt={game.title}/>
        <p>{game.description}</p>
        <p>{game.edition}</p>
        <p>{game.platform}</p>
        <button onClick={deleteGame}>Delete Game</button>
        <button onClick={(e) => counter(e)}>Like {count}</button>
    </div>
  )
}

export default Game