import React, { useState, useEffect } from 'react';

const LoginPopup = ({isOpen, togglePopup}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (!isOpen){
            setUsername('');
            setPassword('');
            setError('');
        }
    }, [isOpen]);

    const handleLogin = (event) => {
        event.preventDefault();
        //change these to preferred values
        const hardcodedUsername = 'MysteriousRob';
        const hardcodedPassword = 'password123';

        if (username === hardcodedUsername && password === hardcodedPassword) {
            alert('Login Successful');
            setIsOpen(false);
        } else {
            setError('Invalid username or password');
        }
    };

    if (!isOpen) return null;


    return (
        <>
        <div className='fixed insert-0 flex items-center justify-center bg black bg-opacity-50'>
            <div className='bg-white p-8 rounded shadow-lg w-96 relative'>
                <button 
                className='text-grey-500 hover:text-grey-800 absolute top-2 right-2'
                onClick={togglePopup}
                >
                    &times;
                </button>
                <h2 className='text-2xl mb-4'>
                    Login
                </h2>
                <form onSubmit={handleLogin}>
                    <div className='mb-4'>
                        <label 
                        className='block text-gray-700 text-sm font-bold mb-2'
                        htmlFor="username"
                        >
                            Username:
                        </label>
                        <input 
                        className='shadow appearance-none border rounded w-ful py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline'
                        type='text'
                        id='username'
                        name='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        />
                    </div>
                    <div className='mb-4'>
                        <label 
                        className='block text-gray-700 text-sm font-bold mb-2'
                        htmlFor="password"
                        >
                            Password:
                        </label>
                        <input 
                        className='shadow appearance-none border rounded w-ful py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline'
                        type='text'
                        id='password'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                    </div>
                    {error && <p className='text-red-500 text-xs italic'>{error}</p>}
                    <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    type='submit'
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
        </>
    );
};

export default LoginPopup;