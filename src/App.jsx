import { Routes, Route, Link } from 'react-router-dom'

// pages

import { About } from './View/about';
import { Smi } from './View/New';
import { Homes } from './View/Home';
import { Notfald } from './View/Notfault';
import { Profile } from './View/Profile';

// outlet

import { Layout } from './components/Layout';

function App() {
  return (
  
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/home' element={<Homes />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/news' element={<Smi />}/>
          <Route path='*' element={<Notfald />}/>
        </Route>
      </Routes>
  );
}

export default App