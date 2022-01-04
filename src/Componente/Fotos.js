import React from "react";
import { useEffect } from "react";
import { useState } from "react";




const Fotos = () => {
    const [gifs , setGifs] = useState([])
    const [loading, setLoading] = useState(false)
    const apiURL='https://api.nasa.gov/planetary/apod?api_key=bukZfsu5und3ztZSfgMQgsyp8kKghVNNHQbwQRJU'
  

    
  
    useEffect((loading) => { 
      setLoading(true) 
  
      setTimeout(() => {
      fetch(apiURL)
      .then(res => res.json())
      .then(response =>{
          const {data} = response
          
          const gifs = data.map(image => image.images.downsized.url)
          setGifs(gifs)
          setLoading(false)
      })
    
      }, 4000)
    }, []);
  



    return (
            <div className="App-aling">
        
        
            <h1>Fotos</h1>
            {loading ? "cargando" : ""}
            {
            gifs.map(gif => <img src={gif} alt="gif"/>)
            }
            </div>
    );
}

export default Fotos;