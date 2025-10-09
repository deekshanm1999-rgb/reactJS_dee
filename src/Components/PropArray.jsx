// function PropArray({seatNo}){
//     return(
//        <h1>{seatNo}</h1>
//     )
// }

// export default PropArray

// const Myobject ={NAME,phone,number,seats}
function PropObject({Myobject}){
    return(
       <h1>{Myobject.NAME},{Myobject.phone},{Myobject.number},{Myobject.seats}</h1>
    // <h1>{Myobject}</h1> we should not use like this
    )                   
}

export default PropObject
