import React, { useEffect, useState } from 'react';
import '../App.css';
function Item({name})
{
    return(
        <div className="dropdown-item">
            {name}
        </div>
    )
}
export default Item;