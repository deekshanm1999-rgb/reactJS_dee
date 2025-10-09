import React, {useState} from "react";

function Form(){
    const [text, setText] =useState('')

    // function handleChange(e){
    //     // console.log('something changed');
    //     setText(e.target.value);
    //             console.log(e);

    // }

    // we can use event by using above function but it is long so we can use like below
    return(
        <div>
            <form>
                <input onChange={(e)=>setText(e.target.value)} type='text' value ={text}/>
            </form>
        </div>
    )
}

export default Form;