import React from 'react'

const Card = ({pokemon,loading,infoPokemon}) => {
    //console.log(pokemon);
  return (
    <>
        {
            loading ? <h1>Loading...</h1> : 
            pokemon.map((item)=>{
                return(
                    <>
                    <div className='card text-bg-dark  border-success mb-3' style={{width: '10rem'}} key={item.id} onClick={()=>infoPokemon(item)}>
                        <img src={item.sprites.front_default} className='card-img-top' alt="pokemon" />
                        <div className='card-body text-success'>
                            <h5 className='card-title text-center'>{item.name}</h5>
                            <p className='card-text text-center'>{item.id} </p>
                        </div>
                    </div>
                    </>
                )
            })
        }
    </>
  )
}

export default Card