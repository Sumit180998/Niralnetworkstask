
import './Moviepage.css';
import { useEffect, useState } from "react";
import Footer from '../Nav_footer/Footer';
import Navbar from '../Nav_footer/Navbar';
import Card from '../card/Card';
import axios from "axios";
import {useParams} from 'react-router-dom';

function Moviepage() {
  // const { state } = useLocation();
  const { id} = useParams()
  const[DataTrend, setDataTrend]=useState([])
  
  function movielists() {
	
    axios.get(`https://api.themoviedb.org/3/movie/changes?end_date=2023-11-30&page=1&start_date=2023-11-16`,{
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjA2Njg2N2RiYjVkNGNlNDllZjNmZjQzOTBmODZmYSIsInN1YiI6IjY0NjM3MzgwMGYzNjU1MDE3MGIzOWIwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MTfnkJYTZhNVqtXpIhB0sghRwh1yd0xtujUwrnNZ6-o'
    } 
}).then((response) => {
      // console.log(response.data.results)
      setDataTrend(response.data.results)
    
    }).catch(error => {
      console.log(error)
      // setError(error);
    });
  };
  useEffect(() => {

    movielists()
}, []);
  return (
    <div className="">
      <Navbar/>
      <div className='Moviepage'>
      <div className='row' id='rowMovie'>
      {
        DataTrend.map((x,i)=>{
            return(<div className="col-lg-2 col-md-3 col-sm-6 themed-grid-cols">
         { x.id? <Card id={x.id}/>:<></>}
        
            </div>)})}
            
            </div>
           
      </div>
      <Footer/>
    
    </div>
  );
}

export default Moviepage;