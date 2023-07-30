import { useState } from "react"
import { AddCategory,GifGrid } from "./components"


export const GifExpertApp = () => {
    const [categories, setcategories]=useState(['rick and morthy'])


    const onAddCategorye=(NewCategory)=>{
        if(categories.includes(NewCategory)) return;

     
        setcategories([NewCategory,...categories]);
    }

  
  return (
    <>
        {/* titulo  */}
      <h1>GitExpertApp</h1>
        <AddCategory 
        
          onNewCategory={onAddCategorye}
        />

                 {
                categories.map(category =>
                    (
                      <GifGrid key={category} category={category}/>
                    )
                )
                
                }
    </>
  )
}

export default GifExpertApp
