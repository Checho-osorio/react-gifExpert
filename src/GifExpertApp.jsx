import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
//import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'boku no hero'])

    const onAddCategory = ( newCategory ) => {
        
        if ( categories.includes(newCategory)) return;

        setCategories( [ newCategory , ...categories ])
        // setCategories( cat => [...cat, 'Valorant'])
    }


  return (
    <>
        
        <h1>GifExpertApp</h1>

        <AddCategory 
            // setCategories= { setCategories } 
            onNewCategory = { onAddCategory}
        /> 

        {/* Listado de Gif */}

        { categories.map( category => (
                <GifGrid key={ category } category={ category }/>
            ))
        }
      


    </>
  )
}
