import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams, Link} from 'react-router-dom';


const GameList = () => {
    const [games, setGames] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/games')
        .then((res) => {
            console.log(res.data);
            setGames(res.data.games);
        })
        .catch((err)=>console.log(err))
    }, []);


  return (
    <div className='bg-white'>
        <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'> 
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Games in Collection</h2>  
        {/* container for cards */}
            <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {/* cards */}
                {games.map((game) => (
                    <div key={game._id} className="w-full min- bg-slate-300 aspect-w-1 aspect-h-1 rounded-md group-hover:opacity-75 lg:h-80 lg:aspect-none">
                        <img className='w-full object-center object-cover lg:w-full' src={game.boxArt} alt={game.title}/>
                        <h2 className='font-bold text-xl mb-2'>{game.title}</h2>
                        <p className='text-gray-700 text-base'>{game.description}</p>
                        <div className='px-4 pt-2 pb-2'>
                            <p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{game.edition}</p>
                            <p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{game.platform}</p>
                        </div>
                        <div className='flex flex-row justify-evenly'>
                            <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
                            to={`/games/edit/${game._id}`}> Edit Game </Link>
                            <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
                            to={`/games/${game._id}`}> Details </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default GameList