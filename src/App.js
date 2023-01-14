import logo from './logo.svg';
import './App.css';
import Post from './Post';
function App() {
  return (
    <>
            <div className=" card container-fluid container-sm container-md" style={{border:"1px light black" ,marginTop:"20px",marginBottom:"20px"}}>

    <h5 style={{textAlign:"center",marginTop:"1rem"}}>Display all Data of Api using Redux</h5>
   <Post/>
   </div>
    </>
  );
}

export default App;
