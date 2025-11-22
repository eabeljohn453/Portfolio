"use client"
import React, { use } from "react"
import { useState ,useEffect} from "react"
import axios from "axios"
export default function A(){
    const [value,setValue]=useState('')
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
            console.log(response.data)
            setValue(response.data)
            
        })
        .catch(e=>{

        })
    },[])
    return(
        <div>
            {value?<ul   >
            {value.map(item=>(
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>:''}
        </div>

    )
}