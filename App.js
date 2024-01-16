import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Likedpage from './components/Likedpage';
import { Routes,Route } from 'react-router-dom';
import TrendingTopics from './components/TrendingTopics';
import { useState } from 'react';


function App() {

  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element={<Homepage  />}></Route>
      <Route path='/liked' element={<Likedpage/>}></Route>
      <Route path='/liked/:id' element={<Likedpage/>}></Route>
      <Route path='/trending/:name' element={<TrendingTopics/>}></Route>

     </Routes>
   
    </div>
  );
}

export default App;
