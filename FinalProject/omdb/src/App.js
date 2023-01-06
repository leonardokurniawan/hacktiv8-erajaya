import React from 'react';
import Header from './components/templates/Header';
import { Routes, Route } from 'react-router-dom';
import Movies from './pages/movies';
import Search from './pages/movies/Search';
import Detail from './pages/movies/Detail';

const App = () => {
  return (
    <div className="bg-black flex flex-col items-center">
      <div className="container flex flex-col text-white min-h-[100vh]">
        <Header />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/search/:key" element={<Search />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
