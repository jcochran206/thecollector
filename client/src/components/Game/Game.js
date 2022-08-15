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
    <div className='container mx-auto px-4'>
      <div className='max-w-sm rounded shadow-sm bg-center'>
        <img className='w-full' src={game.boxArt} alt={game.title}/>
        <div className='px-6 py-4'>
        <h2 className='font-bold text-xl mb-2'>{game.title}</h2>
        <p className='text-gray-700 text-base'>{game.description}</p>
        </div>
        <p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{game.edition}</p>
        <p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{game.platform}</p>
        <div className='flex flex-row justify-evenly'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={deleteGame}>Delete Game</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(e) => counter(e)}>Like {count}</button>
        </div>
      </div>  
    </div>
  )
}

export default Game