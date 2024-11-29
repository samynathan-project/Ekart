import React from "react";
import './Searchbar.css';

export default function Searchbar()
{
    return(
        <div className="search">
            <input type="text" placeholder="search for restarunt, cuisine or a dish" />
            <button className="btn"><i class="fa-solid fa-magnifying-glass"></i> search</button>
           
        </div>
    )
}
