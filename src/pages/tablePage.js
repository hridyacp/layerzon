import { Grid } from "@mui/material";
import Navigation from "../components/navigation";
import TableTransaction from "../components/table";
import search from "../Assets/search.jpg";
import '../App.css';

// import './navigation.css';
function Tablepage() {
    return (
        <header className="App-header">
      <Grid container spacing={6} columns={12} >
      <Grid item xs={12}>
      <Navigation />
  </Grid>
  <Grid item xs={4}>
  <Grid item xs={12}>
  Total InterComputations
  </Grid> <Grid item xs={12}>
      150
  </Grid>
  </Grid>
  <Grid item xs={4}>
  <Grid item xs={12}>
  Total Gas fees used
  </Grid> <Grid item xs={12}>
      150
  </Grid>
  </Grid>
  <Grid item xs={4}>
  <Grid item xs={12}>
  Lowest gas fee chain
  </Grid> <Grid item xs={12}>
      150
  </Grid>
           
  </Grid>
 
  <Grid item xs={12}>
  <Grid item xs={12}>
    <div className='search-maincontainer'>
    <div className='search-container'>
    <input className='search-container' type='text' placeholder='Search by transaction hash'/> 
    <img src={search} alt="search" width="40px" height="40px"/>
    </div>
    </div>     
  </Grid>
  <Grid item xs={12}>
    <div className='table-container'>
      <span className='table-caption'>Messages</span>

    <TableTransaction />
    </div>
           </Grid>
  </Grid>
      </Grid>
      </header>
    );
  }
  
  export default Tablepage;