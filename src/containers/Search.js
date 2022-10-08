// import FetchData from "../components/FetchData"
import React, { useCallback } from "react"

export default function Search(){

    const MovieBeinSearched = useCallback((e) => {
        console.log(e.target.value)

    })

    return(

        <form>
        <label>movie Title</label>
        <input type="text" onChange={MovieBeinSearched}/>
        </form>
        
    )

}