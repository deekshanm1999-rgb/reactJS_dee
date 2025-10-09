function Rprop(props){
    return(
        <h1>Hi {props.name},{props.phone}</h1>
    )
}
export default Rprop

// we can use like this also restructuring

// function Rprop({name,phone}){
//     return(
//         <h1>Hi {name},{phone}</h1>
//     )
// }
// export default Rprop