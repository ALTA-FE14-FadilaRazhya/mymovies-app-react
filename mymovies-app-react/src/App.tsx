import React, { Component } from 'react'
import Card from './components/Card';
import Navbar from './components/Navbar';
import { list } from "../src/dummy/list.json"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import NowPlaying from './NowPlaying.tsx'
import ListFavourite from './ListFavourite.tsx'
import DetailMovie from './DetailMovie.tsx'

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NowPlaying />} />
          <Route path="/DetailMovie" element={<DetailMovie />} />
        </Routes>
      </BrowserRouter>
  );
};
export default App;