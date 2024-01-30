import './Card.css'
import { useLocation ,useNavigate} from 'react-router-dom';
import React,{useEffect,useState} from 'react';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import axios from 'axios';
import 'react-circular-progressbar/dist/styles.css';
function Card({id}){
  const[data,setdata]=useState({})
  const navigate = useNavigate();
  const Detailpage = (id, moviename) => {
    const str =moviename
    var replaced = str.split(' ').join('_');

        navigate(`/MovieDetail/${id}_${replaced}`
        , {
      state:{
        id
      }
    } );
      console.log(id, moviename)
    }
   async function movies() {
	
     await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,{
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjA2Njg2N2RiYjVkNGNlNDllZjNmZjQzOTBmODZmYSIsInN1YiI6IjY0NjM3MzgwMGYzNjU1MDE3MGIzOWIwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MTfnkJYTZhNVqtXpIhB0sghRwh1yd0xtujUwrnNZ6-o'
      } 
  }).then((response) => {

        
        console.log(response.data)
        console.log(response.data)
      setdata(response.data)
      }).catch(error => {
        console.log(error)
        // setError(error);
      });
    };
    
  useEffect(()=>{
movies()
  },[])
  
    return(
      // <div className="container">

      <div className="cellphone-containers" 
      onClick={() => { Detailpage(data.id,data.title) }
      }
      >
       <div className='circlelist'>
       <CircularProgressbar value={Math.round((data.vote_average)*10) } text={`${Math.round((data.vote_average)*10) }%`}
       strokeWidth={5}
       styles={buildStyles({
       
    
        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: 'butt',
    
        // Text size
        textSize: '25px',
        fontWeight: 600,
        
    
        // How long animation takes to go from one percentage to another, in seconds
        pathTransitionDuration: 0.5,
    
        // Can specify path transition in more detail, or remove it entirely
        // pathTransition: 'none',
    
        // Colors
        pathColor: `rgba(0, 175, 0, ${Math.round((data.vote_average)*10) / 100})`,
        textColor: '#fff',
        trailColor: '#d6d6d6',
        backgroundColor: '#3e98c7',
      })} />
         </div>
        <div className="movie">
        <div className="movie-img">
       
        <img
  loading="lazy"
  className="poster"
  src={"https://www.themoviedb.org/t/p/w220_and_h330_face" +data.poster_path}
  alt=""
/>

        </div>
        </div>
        
        <div className="mr-grid">
        <p className='mr-grid_name' id='grid_name'>{data.title}</p>
        <p>{data.release_date}</p>
     </div>

        </div>
        
      // </div>
    
    )
}
export default Card;