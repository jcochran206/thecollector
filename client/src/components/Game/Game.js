import React, {useEffect, useState} from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const Game = () => {
    const [game, setGame] = useState({});
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

  return (
    <div>
        <h2>{game.title}</h2>
        <img src={game.boxArt} alt={game.title}/>
        <p>{game.desc}</p>
        <p>{game.edition}</p>
        <p>{game.platform}</p>
    </div>
  )
}

export default Game