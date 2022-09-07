import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams, Link} from 'react-router-dom';


const GameList = () => {
    const [games, setGames] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('https://thecollector-server.herokuapp.com/api/games') //change to localhost:8000 when in dev
        .then((res) => {
            console.log(res.data);
            setGames(res.data.games);
        })
        .catch((err)=>console.log(err))
    }, []);


  return (
    <div className='bg-white'>
        <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'> 
        {/* jumbtron */}
        <div className="max-w-screen-xl bg-green-500 shadow-2xl rounded-lg mx-auto text-center py-12 mt-4">
        <h2 className="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">
            Start Gaming with Us
        </h2>
        <h3 className='text-gray-300 sm:text-3xl sm:leading-10'>We are a community of gamers who want to share our games with you</h3>
        <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md bg-white shadow">
                <a href="#" class="text-gray-700 font-bold py-2 px-6">
                    Join Now
                </a>
            </div>
        </div>
    </div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 py-6">Games in Collection</h2>  
        {/* container for cards */}
            <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {/* cards */}
                {games.map((game) => (
                    <div key={game._id}>
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