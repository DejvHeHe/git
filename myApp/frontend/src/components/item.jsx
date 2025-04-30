import React, { useEffect, useState } from 'react';
import '../App.css';
function Item({name,count,state})
{
    return(
        <div className="dropdown-item">
            <input type="checkbox" value={state}/>
            {name} | Pocet: {count}
            
        </div>
    )
}
export default Item;