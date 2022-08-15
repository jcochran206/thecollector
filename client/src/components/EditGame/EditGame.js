import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams,useLocation} from 'react-router-dom';
import Game from '../Game/Game';

const EditGame = () => {
  const [game, setGame] = useState({});
  const [oldGame, setOldGame] = useState(null);
  const [title, setTitle] = useState('');
  const [boxArt, setBoxArt] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const [platform, setPlatform] = useState('');
  const [edition, setEdition] = useState('');
  const [price, setPrice] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const navigate = useNavigate();
  const { state } = useLocation();
  const {id} = useParams();
  //fetch call 
  useEffect(() => {
    if(!state){
      axios.get(`http://localhost:8000/api/games/${id}`)
    .then((res)=> {
        console.log(res.data);
        setGame(res.data.game);
        setTitle(res.data.title);
        setBoxArt(res.data.boxArt);
        setRating(res.data.rating);
        setDescription(res.data.description)
        setPlatform(res.data.platform);
        setEdition(res.data.edition);
        setPrice(res.data.price);
        setManufacturer(res.data.manufacturer);
        setReleaseYear(res.data.releaseYear);
    })
    .catch((err) => console.log('get game by id error', err))

    }else{
      console.log('here is the state',state);
      setOldGame(state);
    }
  }, [id])

  //handle submit 
  const submitHandler = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/games/${id}`, {
        title,
        boxArt,
        description,
        rating,
        edition,
        price,
        manufacturer,
        releaseYear,
    }).then((res) => {
        console.log(res.data);
        navigate('/');
    }).catch((err) => console.log('post error', err))
  }

  return (
    <div className='w-full max-w-lg'>
      <h2>Edit {game.title}</h2>
      <form onSubmit={submitHandler} className="bg-white shadow-md rounded px-8 pt-4 pb-4 mb-4 flex flex-col items-center justify-center" >
      <div className='mb-2'>
        <label className='block text-gray-700 text-lg font-bold mb-2" for="username"'>Title</label>
        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} />
      </div>
      <label>Box Art</label>
      <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      type="text" 
      value={boxArt} onChange={(e) => setBoxArt(e.target.value)} />
      <label>Description:</label>
      <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      type="text" 
      value={description} 
      onChange={(e) => setDescription(e.target.value)} />
      <label>Rating</label>
      <select className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      value={rating} 
      name="rating" 
      onChange={(e) => setRating(e.target.value)}>
        <option>Select a Rating</option>
        <option value="E">Everyone</option>
        <option value="E10">Everyone +10</option>
        <option value="T">Teen</option>
        <option value="M">Mature</option>
        <option value="AO">Adults Only</option>
        <option value="RP">Rating Pending</option>
      </select>
      <label>platform:</label>
      <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        type="text"
        value={platform}
        placeholder={game.platform}
        onChange={(e) => setPlatform(e.target.value)}
      />
      <label>edition:</label>
      <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        type="text"
        value={edition}
        placeholder={game.edition}
        onChange={(e) => setEdition(e.target.value)}
      />
      <label>Price:</label>
      <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        type="text"
        value={price}
        placeholder={game.price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <label>Manufacturer:</label>
      <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        type="text"
        value={manufacturer}
        placeholder={game.manufacturer}
        onChange={(e) => setManufacturer(e.target.value)}
      />
      <div className='mb-4'>
      <label> Release Year</label>
      <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      type="number" 
      value={releaseYear} 
      placeholder={game.releaseYear}
      onChange={(e) => setReleaseYear(e.target.value)} />
      </div>

      <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline;' type='submit'>Update Game</button>

    </form>
    </div>
  )
}

export default EditGame