import React from "react";
import Moviepage from "./task3/movie/Moviepage";
import MovieDetail from "./task3/Detail_page/MovieDetail"
import Tasklist from './Task1/Tasklist'
import Navbar from "./task2/Navbar";
import Task from "./Task";


import {
    BrowserRouter,
    Routes,
    Route,
    Redirect,
    Navigate
  } from "react-router-dom"

export default function TaskRouter() {
    return (
        <BrowserRouter>
           <Routes>
           <Route path="/task" element={<Task/>}/>
          
           <Route path="/Movielist" element={<Moviepage/>}/>
           <Route path="/MovieDetail/:id" element={<MovieDetail/>}/>
           <Route path="/tasklist" element={<Tasklist/>}/>
           <Route path="/navbar" element={<Navbar/>}/>
           
           
                <Route path="/" element={<Navigate replace to="/task" />} />
              
            </Routes>
        </BrowserRouter>
    );
}