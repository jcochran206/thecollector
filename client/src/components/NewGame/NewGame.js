import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const NewGame = () => {
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
  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/games', {
        title,
        boxArt,
        description,
        platform,
        rating,
        edition,
        price,
        manufacturer,
        releaseYear,
    })
    .then((res) => {
        console.log(res.data);
        navigate('/');
    })
    .catch((err) => console.log('error happend in submit', err));
  }
    
  return (
    <div className='w-full max-w-lg'>
      <h2>Add New Game</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-4 pb-4 mb-4 flex flex-col items-center justify-center">
      <div className='mb-1'>
        <label className='block text-gray-700 text-lg font-bold mb-2" for="username"'>Title</label>
        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} />
      </div>
      <label>Box Art</label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      type="text" 
      value={boxArt} 
      onChange={(e) => setBoxArt(e.target.value)} />
      <label>Description:</label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      type="text" 
      value={description} 
      onChange={(e) => setDescription(e.target.value)} />
      <label>Rating</label>
      <select value={rating} name="rating" onChange={(e) => setRating(e.target.value)}>
        <option>Select a Rating</option>
        <option value="E">Everyone</option>
        <option value="E10">Everyone +10</option>
        <option value="T">Teen</option>
        <option value="M">Mature</option>
        <option value="AO">Adults Only</option>
        <option value="RP">Rating Pending</option>
      </select>
      <label>platform:</label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={platform}
        placeholder="enter platform"
        onChange={(e) => setPlatform(e.target.value)}
      />
      <label>edition:</label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={edition}
        placeholder="enter edition"
        onChange={(e) => setEdition(e.target.value)}
      />
      <label>Price:</label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={price}
        placeholder="enter price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <label>Manufacturer:</label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={manufacturer}
        onChange={(e) => setManufacturer(e.target.value)}
      />
      <label> Release Year</label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />
      <div className='py-2 mb-4'>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline;' type='submit'>Add Game</button>
      </div>
    </form>
        
    </div>
  )
}

export default NewGame