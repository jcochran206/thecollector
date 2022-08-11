import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const GameList = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/games')
        .then((res) => {
            console.log(res.data);
            setGames(res.data.games);
        })
        .catch((err)=>console.log(err))
    }, []);

  return (
    <div className='container'>
        {games.map((game) => (
            <div key={game._id} className="card">
                <h2>{game.title}</h2>
                <img src={game.boxArt} alt={game.title}/>
                
                <p>{game.edition}</p>
                <p>{game.platform}</p>
            </div>
        ))}

    </div>
  )
}

export default GameList