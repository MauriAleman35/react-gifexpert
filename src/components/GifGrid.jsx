
import { GifItem } from "./GifItem";
import { usefetchGifs } from "../hooks/usefetchGifs";
import { CargarLoading } from "./CargarLoading";


export const GifGrid = ({category}) => {
  const {images,isloading}= usefetchGifs(category);
  
  
 
  return (
    <>
      

        <h3>{category}</h3>
        
        <CargarLoading propLoading={isloading} />
        <div className="card-grid">
              {
                images.map((imagen)=>(
                  <GifItem {...imagen}/>
                ))
                
              }
          
          
        </div>      
    </>
  )
}


