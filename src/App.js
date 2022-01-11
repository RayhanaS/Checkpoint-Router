
import './App.css';
import {useState}from 'react'
import NavBar from './Component/NavBar';
import Filter from './Component/Filter';
import Add from './Component/Add';
import MovieList from './Component/MovieList';
import {movies} from './Component/Movies';
import {Switch , Route} from "react-router-dom"
import Details from "./Component/Details";

function App() {

  const  [movieList, setmovieList] = useState(movies)
 const addHandler=(newMovie)=> {
  setmovieList ([...movieList, newMovie])
 }
 const [search,setSearch]= useState("")
 const [rating,setRating]= useState("")

  return (
    <div className="App">
   <NavBar/>
   <Filter setSearch={setSearch}  setRating={setRating} rating={rating}  />
   <Add addHandler ={addHandler}/>
   <Switch>
     <Route exact path="/">  <MovieList movieList={movieList} search={search} rating={rating}/> </Route>
     <Route path ="/details/:id" render ={(props)=> <Details {...props} list={movieList} />}/>
   </Switch>
   
    </div>
  );
}

export default App;
