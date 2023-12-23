import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Footer from '../components/Footer';


// login form 
export default function LoginPage ()  {

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      await  axios.post(`${process.env.API_URL}/users/login`, {
        username,
        email,
        password,
      });
      alert('Login succesful')
    } catch (e) {
      console.error('Error:', e);
      console.log('Request details:', e.config);
      alert('Error, please try again');
    }
  }

  return (
    <div>
      <Layout/>
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='mb-64'>
        <h1 className='text-4xl text-center'> Login  </h1>
        <form className='max-width-md mx-auto ' onSubmit={handleLoginSubmit}>
          <input type="email" 
            placeholder='your@email.com'
            value={email}
            onChange={ev => setEmail(ev.target.value)}/>
          <input type="username" 
            placeholder='username'
            value={username}
            onChange={ev => setUsername(ev.target.value)}/>
          <input type="password" 
            placeholder="password"
            value={password}
            onChange={ev => setPassword(ev.target.value)} />
          <button> Login</button>
          <div className='text-center text-gray-400'> 
            <Link to ={'/registration'}> Register Here </Link>
          </div>
        </form>
    </div>
    </div>
    <Footer/>
            </div>
  )
};

