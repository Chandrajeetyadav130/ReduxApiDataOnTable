const url='https://jsonplaceholder.typicode.com/posts';
const fetchApi=()=>{
    return async (dispatch,state)=>{
       const response=await fetch(url)
       const data=await response.json();
       console.log(data)
       dispatch({
        type:"Fetch_POST",
        payload:data
       })
    }
}
export default fetchApi