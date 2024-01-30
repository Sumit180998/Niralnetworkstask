import './Navbar.css'
import React, {useState} from 'react'


function Navbar() {
    const [Search, setSearch] = useState("");
    const [sidebar, setSidebar] =useState(false)
    const [open, setOpen] = useState();
    const showSidebar = () => setSidebar(!sidebar)
    const handleOpen = (x) => {
        if(x===open){
            setOpen(false)
        }
        else{
        setOpen(x);}
      };
     
     
      
      
	
    return (
        <>

      <header>
       <div className='mobile_menu'>
        <nav ><i className="fa-solid fa-bars white" onClick={showSidebar}></i>
        <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
            <ul >
            <li className="" >
            <span  className='sum'  >  <a >Movie</a>   <i  onClick={(()=>handleOpen('Movie'))}class="fa-solid fa-caret-down"></i></span> 
                  { open=== 'Movie'?(
                   <ul>
                     <li className="dropDown">
                          <a  target="_blank">Popular</a>
                                              
                      </li>
                      <li><a  target="_blank">Now Playing</a></li>
                      <li><a  target="_blank">Upcoming </a></li>
                      <li><a  target="_blank">Upcoming </a></li>
                      <li><a  target="_blank">Top Rated </a></li>
                  </ul>):null
                  
                  }
              </li>
              <li className="">
              <span  className='sum'  >   <a> Popular</a> <i   onClick={(()=>handleOpen('Popular'))}  class="fa-solid fa-caret-down"></i></span> 
                  { open==='Popular'?(
                   <ul>
                     
                     <li className="dropDown">
                          <a  target="_blank">Popular</a>
                                              
                      </li>
                      <li><a  target="_blank">Airing Today</a></li>
                      <li><a  target="_blank">On TV</a></li>
                      <li><a  target="_blank">Top Rated</a></li>
                  </ul>):null
                  
                  }
              </li>
              <li className="" >
              <span  className='sum'  >   <a >Now Playing</a>  <i onClick={(()=>handleOpen('Now Playing'))} class="fa-solid fa-caret-down"></i></span> 
                  { open==='Now Playing'?(
                   <ul>
                      <li className="dropDown">
                          <a  target="_blank">Popular People</a>                      
                      </li>
                      
                  </ul>):null
                  
                  }
              </li>
              <li className="" >
              <span  className='sum'  >  <a>Top Rated </a>   <i  onClick={(()=>handleOpen('TopRated'))}class="fa-solid fa-caret-down"></i></span> 
                  { open==='TopRated'?(
                   <ul>
                     <li className="dropDown">
                          <a  target="_blank">Discussions</a>
                                              
                      </li>
                      <li><a  target="_blank">Leaderboard</a></li>
                      <li><a  target="_blank">Support</a></li>
                      <li><a  target="_blank">API</a></li>
                  </ul>):null
                  
                  }
              </li>
              
            </ul>
        </nav>
        </nav>
        <nav ><img src="https://thumbs.dreamstime.com/b/movie-film-7356349.jpg?w=1400" alt="Motionmovie" width="100" height="39"/></nav>
        <nav > 
        <i class="fa-solid fa-magnifying-glass"></i>
             </nav>
             
       </div>
       
     <div className='contentss'>
      <nav className=''> 
      
          <ul >
         <li > <img src="https://thumbs.dreamstime.com/b/movie-film-7356349.jpg?w=1400" alt="Motionmovie" width="80" height="50"/></li> 
              <li className="dropDown-menu"
                 >Movie
                  <ul>
                      <li className="dropDown">
                          <a  target="_blank">Popular</a>
                                              
                      </li>
                      <li><a  target="_blank">Now Playing</a></li>
                      <li><a  target="_blank">Upcoming </a></li>
                     
                      <li><a  target="_blank">Top Rated </a></li>
                  </ul>
              </li>
              <li className="dropDown-menu" >Popular
                  <ul>
                      <li className="dropDown">
                          <a  target="_blank">Popular</a>
                                              
                      </li>
                      <li><a  target="_blank">Airing Today</a></li>
                      <li><a  target="_blank">On TV</a></li>
                      <li><a  target="_blank">Top Rated</a></li>
                  </ul>
              </li>
              <li className="dropDown-menu">
                  <a  target="_blank">Top Weak</a>
                  <ul>
                      <li className="dropDown">
                          <a  target="_blank">Popular People</a>                      
                      </li>
                      
                  </ul>
              </li>
              <li className="dropDown-menu" >Top Rated 
                  <ul>
                      <li className="dropDown">
                          <a  target="_blank">Discussions</a>
                                              
                      </li>
                      <li><a  target="_blank">Leaderboard</a></li>
                      <li><a  target="_blank">Support</a></li>
                      <li><a  target="_blank">API</a></li>
                  </ul>
              </li>
             
              
          </ul>
      </nav>
      <nav> 
          <ul>
             
              <li className="dropDown-menu">
              <form id="inner_search_formS" >
              <label>
                <input dir="auto" id="inner_search_v4S"  type="text" tabindex="1" autocorrect="off" autofill="off" autocomplete="off" spellcheck="false"
                 value={Search}
                 onChange={e => setSearch(e.target.value) }
                   placeholder="Search for a movie"  fdprocessedid="w3r14a"/>
              </label>
              <input type="submit" className='buttonS' value="Search" fdprocessedid="15875j" />
          
            
            </form>
                 
              </li>
              <li className="dropDown-menu">
                  <a  target="_blank">Services</a>
                 
              </li>
              
              
             
              
          </ul>
      </nav>
      </div>
     
  </header>
 
      </>  
        
    );
  }
  
  export default Navbar;