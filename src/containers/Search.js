import FetchData from "../components/FetchData"
import React, { useCallback } from "react"

export default function Search(){

    const MovieBeinSearched = useCallback((elem) => {
        console.log(elem.target.value)
        FetchData(elem.target.value)
    })

    return(

        <form>
        <label>movie Title</label>
        <input type="text" onChange={MovieBeinSearched}/>
        </form>
        
    )

}