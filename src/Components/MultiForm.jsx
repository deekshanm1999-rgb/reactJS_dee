import React ,{useState} from "react";

function MultiForm(){
    const [name, setName] =useState({firstName:'', lastName:''})

    function handleButton(e){
        e.preventDefault();
        console.log(name.firstName + '-'+ name.lastName)
    }


    

    return(

        <div>
            
            <form>
                <lable>FirstName : </lable>
        <input onChange = {(e)=>setName({...name,firstName:e.target.value})} type='text' value ={name.firstName}/>
        <label >LastName : </label>
        <input onChange = {(e)=>setName({...name,lastName:e.target.value})} type='text' value ={name.lastName}/>

<h1>{name.firstName}- {name.lastName}</h1>

<button onClick ={(e)=>handleButton(e)}>Submit</button>
            </form>


        </div>
    )
}

export default MultiForm;