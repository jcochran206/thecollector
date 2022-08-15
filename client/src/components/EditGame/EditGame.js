import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditGame = () => {
  const [title, setTitle] = useState('');
  const [boxArt, setBoxArt] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const [platform, setPlatform] = useState('');
  const [edition, setEdition] = useState('');
  const [price, setPrice] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [releaseYear, setReleaseYear] = useState(0);
  const navigate = useNavigate();
  const {id} = useParams();
  //fetch call 
  useEffect(() => {
    axios.get(`http://localhost:8000/api/games/${id}`)
    .then((res)=> {
        console.log(res.data);
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
  }, [])

  //handle submit 
  const handleSubmit = (e) => {
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
    <div>
              <h2>Add New Game</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label>Title</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Box Art</label>
      <input type="text" value={boxArt} onChange={(e) => setBoxArt(e.target.value)} />
      <label>Description:</label>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
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
      <input
        type="text"
        value={platform}
        placeholder="enter price"
        onChange={(e) => setPlatform(e.target.value)}
      />
      <label>edition:</label>
      <input
        type="text"
        value={edition}
        placeholder="enter price"
        onChange={(e) => setEdition(e.target.value)}
      />
      <label>Price:</label>
      <input
        type="text"
        value={price}
        placeholder="enter price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <label>Manufacturer:</label>
      <input
        type="text"
        value={manufacturer}
        onChange={(e) => setManufacturer(e.target.value)}
      />
      <label> Release Year</label>
      <input type="number" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />

      <button>Add Game</button>

    </form>
    </div>
  )
}

export default EditGame