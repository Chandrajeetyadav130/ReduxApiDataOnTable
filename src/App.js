import logo from './logo.svg';
import './App.css';
import Post from './Post';
import Paper from '@mui/material/Paper';
function App() {
  return (
    <>
            <Paper elevation={4} variant="outlined" sx={{margin:"1rem"}} >

    <h5 style={{textAlign:"center",marginTop:"1rem"}}>Display all Data of Api using Redux</h5>
   <Post/>
   </Paper>
    </>
  );
}

export default App;
