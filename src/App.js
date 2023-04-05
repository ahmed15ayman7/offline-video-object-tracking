import "./App.css";
import Home from "../src/components/home";
import NavScrollExample from "./components/NavBar";
import React, { useEffect, useState } from "react";

import axios from "axios";
import { PageDetails } from "./components/PageDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [movise, setMovise] = useState([]);
  const [Pagination, setPagination] = useState(0);
  const [numPage, setPage] = useState(0);

  let dataMovise = async (n) => {
    let d = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=d69e391737d2c2aa19d8af3e39193efb&language=en-US&page=${n}`
    );
    setMovise(d.data.results);
    setPagination(d.data.total_pages)
    setPage(d.data.page)
  };
  
  let searshMovise = async (n) => {
    if (n !== "") {
      let d = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=d69e391737d2c2aa19d8af3e39193efb&query=${n}&language=en-US`
        );
        setMovise(d.data.results);
        setPagination(d.data.total_pages);
      } else {
        dataMovise(numPage);
      }
    };

  useEffect(() => {
    dataMovise(1);


  }, []);
  const handlePageClick = (event) => {
    setPage(event.selected+1)
    dataMovise(event.selected+1);
  };

  return (
    <div className="App">
      <BrowserRouter>
      <NavScrollExample fun={searshMovise} />
      
      <Routes>
        <Route path={`/`} element={<Home details={movise} Pagination={Pagination} handlePageClick={handlePageClick}/>} />
        <Route path={`/movie/:id`} element={<PageDetails/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
