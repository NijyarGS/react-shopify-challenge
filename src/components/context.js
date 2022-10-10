import React, {createContext} from "react";

let myInfo = {
    movie: {
        name: "the batmight"
    }
}

let Context = createContext({myInfo});
let value = "my context value"

function UseProvider({children}){
    return <Context.Provider value={value}>
        {children}
    </Context.Provider>
}

export {Context}
export {UseProvider}