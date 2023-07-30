import { useState,useEffect } from "react";
import {getGif} from '../helpers/gidadds';


export const usefetchGifs = (category) => {
  const [images,setimage]=useState([]);
  const [isloading,setIsloading]=useState(true);
  
  const getImages=async ()=>{
    const newimagenes= await getGif(category);
    setimage(newimagenes);
    setIsloading(false);
  }

  
  useEffect(()=>{
    getImages();
  },[])
  
    return {
    images,
    isloading
  }
    
  
}


