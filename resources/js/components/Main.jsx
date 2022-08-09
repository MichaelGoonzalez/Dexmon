import React from 'react'
import { createRoot } from 'react-dom/client'
import Card from './Card'
import Pokeinfo from './Pokeinfo'
import './style.css'
import axios from "axios";
import { useState} from 'react'
import { useEffect } from 'react'

const Main = () => {
  const[pokeData,setPokeData]=useState([]);
  const[loading,setLoading]=useState(true);
  const[url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
  const[nextUrl,setNextUrl]=useState();
  const[prevUrl,setPrevUrl]=useState();
  const[pokeDex,setPokeDex]=useState();

  const pokeFun=async()=>{
    setLoading(true)
    const res=await axios.get(url);
    //console.log(res.data.results)
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
    //console.log(pokeData)
    //console.log(pokeDex);
    console.log(prevUrl)
  }
  const getPokemon=async(res)=>{
    res.map(async(item)=>{
      const result=await axios.get(item.url)
      //console.log(result.data)
      setPokeData(state=>{
        state=[...state,result.data]
        state.sort((a,b)=>a.id>b.id?1:-1)
        return state;
      })
    })
  }
  useEffect(()=>{
      pokeFun();
  },[url])
  return (
    <>
        <div className='container'>
            <div className='left-content'>
                  <Card pokemon={pokeData} loading={loading} infoPokemon={setPokeDex}/>
                  <div className='btn-group'>
                        { prevUrl && <button type='button' className='btn btn-danger' onClick={()=>{
                          setPokeData([])
                          setUrl(prevUrl)
                        }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                          </svg>
                        </button>}
                        {nextUrl && <button  type='button' className='btn btn-danger' onClick={()=>{
                          setPokeData([])
                          setUrl(nextUrl)
                        }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                          </svg> 
                        </button>}
                  </div>
            </div>
            <div className='right-content'>
                  <Pokeinfo data={pokeDex}/>
            </div>
        </div>    
    </>
  )
}

export default Main

const container = document.getElementById('main');
const root = createRoot(container);
root.render(<Main tab="main" />);