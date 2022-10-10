import FoundMovies from "./FoundMovies";
import {useState} from 'react'
import {useContext} from 'react'

async function FetchData(movieName){
    // const [movie,movieState] = useState('')
    
    // const API_URL= `http://www.omdbapi.com/?s=${movieName}&type=movie&apikey=${API_KEY}`
    // const API_KEY =  'b540d9b8'

    // const resource = await fetch(API_URL)
    // const data = resource.json();

    const value = useContext('thing');
    console.log(value)
    console.log(movieName)
}

export default FetchData