import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth  from './pages/Auth';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={ <Auth /> }></Route>
    </Routes>
  )
}

export default App
