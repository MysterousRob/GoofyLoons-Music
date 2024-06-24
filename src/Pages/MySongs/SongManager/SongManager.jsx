import React, { useState, useRef } from 'react';
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';

const SongManager = () => {
    const [songs, setSongs] = useState([]);    
    const [] = useState('');
    const [newSong, setNewSong] =  useState({ title: '', url:''});
    const [editingIndex, setEditingIndex] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const audioRef= useRef(null);

    const handleChange = (e) => {
        setNewSong({ ...newSong, [e.target.name]: e.target.value});
    };

    const addSong = () => {
        if (newSong.title.trim() && newSong.url.trim()) {
          if (editingIndex !== null) {
            const updatedSongs = songs.map((song, index) =>
            index === editingIndex ? newSong : song 
            );
            setSongs(updatedSongs);
            setEditingIndex(null);
          } else {
            setSongs([...songs, newSong]);
          }  
          updateSongs([...songs, newSong]);
          setNewSong({title: '', url: ''});
          setShowForm(false);
        }
    };
        const editSong = (index) => {
            setEditingIndex(index);
            setNewSong(songs[index]);
            setShowForm(true);
        };
        const removeSong = (index) => {
            const updatedSongs = songs.filter((_,i) => i !== index);
            setSongs(updatedSongs);
            updateSongs(updatedSongs);
        };
        const playPreview = (url) => {
            if (audioRef.current) {
                audioRef.current.src = url;
                audioRef.current.play();
                setTimeout(() => {
                    audioRef.current.pause();
                }, 30000);
            }
        };

    return (
        <div>
            <Header />
           <div className='p-8'>
               <h2 className='text-2xl mb-'>
                    Manage Songs
               </h2>
               <button
               className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4'
               onClick={() => setShowForm(!showForm)}
               >
                {showForm ? 'Cancel' : 'Add/Update Song'}
               </button>
               {showForm && (
                <div className='mb-4'>
                    <input 
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2'
                    type="text"
                    name="title"
                    placeholder='Song Title'
                    value={newSong.title}
                    onChange={handleChange}
                    required
                    />
                    <input 
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2'
                    type="text"
                    name="url"
                    placeholder='Song URL'
                    value={newSong.url}
                    onChange={handleChange}
                    required
                    />
                    <button 
                    className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
                    onClick={handleChange}
                    >
                        {editingIndex !== null ? 'Update Song' : 'Add Song'}
                    </button>
                </div>
               )}
               <ul>
                {songs.map((song, index) => (
                    <li key={index} className='mb-2 flex justify-between items-center'>
                        <span>
                            {song.title}
                        </span>
                        <div>
                            <button
                            className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2'
                            onClick={() => editSong(index)}
                            >
                                Edit
                            </button>
                            <button
                            className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2'
                            onClick={() => removeSong(index)}
                            >
                                Remove
                            </button>
                            <button
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'
                            onClick={() => playPreview(song.url)}
                            >
                                Play Preview
                            </button>
                        </div>
                    </li>
                ))}
               </ul>
               <audio ref={audioRef} />
           </div>
            <div className='absolute bottom-0 w-full'>
                <Footer />
            </div>
        </div>
    )
}

export default SongManager;