import React from "react";

export default function TodoInput(){
    return(
        <header className="input">
            <input type="text" placeholder="Enter todo..." />
            <button>Add</button>
        </header>
    )
}