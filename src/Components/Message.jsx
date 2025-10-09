import React from 'react';

function Message(){
    function handleButton(){
        console.log('SanDee');
    }
    return(
        <button onClick={handleButton}>Click Me</button>
    )
}

export default Message;