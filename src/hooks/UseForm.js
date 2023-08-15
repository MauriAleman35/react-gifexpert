import { useState } from "react";


export const useForm = (inicialForm={}) => {
    const [Form,SetForm]=useState(inicialForm)
      
 

   const  onchangeValue = ({target})=>{
        const {name,value}=target;
   
        SetForm({   
            ...Form,
            [name]:value

        })
     
   }
   const onResetForm=()=>{
    SetForm(inicialForm);
   }
  
  
  
  
    return {
        ...Form,
        Form,
        onchangeValue,
        onResetForm
    }

  
}