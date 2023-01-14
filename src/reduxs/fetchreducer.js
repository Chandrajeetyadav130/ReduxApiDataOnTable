const fetchreducer=(state=[],action)=>{
    console.log(action)
    if(action.type==="Fetch_POST"){
        return action.payload;
    }
 return state
}
export default fetchreducer