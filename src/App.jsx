import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import { Routes, Route} from "react-router-dom"
import Home from './components/Home';
import SnackList from './components/SnackList';
import SingleSnack from './components/SingleSnack';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/snacks" element={<SnackList />} />
        <Route path="/snacks/:snack_id" element={<SingleSnack/>}/>
      </Routes>
      
    </>
  )
}

export default App
