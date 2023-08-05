import { useState, useEffect } from "react"

export default function MoreInfoButton( {collapseSelector} ) {

    return (  
        <button 
        className='btn btn-primary mb-2'
        data-bs-toggle="collapse"
        data-bs-target={`#${collapseSelector}`}>More Info</button>
    )
}