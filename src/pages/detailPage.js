import { useLocation } from "react-router-dom";
import Navigation from "../components/navigation";
import { Grid } from "@mui/material";
import search from "../Assets/search.jpg";
import '../App.css';
import '../components/navigation.css'

function DetailPage() {
const {state}=useLocation();
  console.log(state.row,"ssssssss")
    return (
      <header className="main-detail-header">
      <Grid container spacing={6} columns={12} >
      <Grid item xs={12}>
      <Navigation />
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
    <div className="name-container">    {state?.row.transactionName}</div>

    </Grid>
  <Grid item xs={12}>
    <div className='table-container'>
      <span className='detail-caption'>Message Details</span>
      <span className='detail-sub'>{state?.row.transactionhash}</span>
<div className="main-sub-container">
  <div className="detail-container">
<div className={'detail-sub-container'}>
  <span style={{fontSize:"medium",paddingRight:'1%'}}>Status:</span>
  <button className={state?.row.status==='PENDING'?'status':'status-del'} style={{width:"100px",height:"25px"}}>{state?.row.status}</button>
</div>
  </div>
  <div className="detail-container">
  <div className={'detail-sub-container'}>
  <span style={{fontSize:"medium",paddingRight:'1%'}}>Message Nonce:</span>
  <span style={{fontSize:"medium"}}>{state?.row.nonce??'24485'}</span>
</div>
  </div>
  <div className="detail-container">
  <div className={'detail-sub-container'}>
  <span style={{fontSize:"medium",paddingRight:'1%'}}>Source Transaction Hash:</span>
  <span style={{fontSize:"medium"}}>{state?.row.transactionhash}</span>
</div>
  </div>
  <div className="detail-container">
  <div className={'detail-sub-container'}>
  <span style={{fontSize:"medium",paddingRight:'1%'}}>Destination Transaction Hash:</span>
  <span style={{fontSize:"medium"}}>{state?.row.transactionhash}</span>
</div>
  </div>
  <div className="detail-container">
  <div className={'detail-sub-container'}>
  <span style={{fontSize:"medium",paddingRight:'1%'}}>Destination Transaction Hash:</span>
  <span style={{fontSize:"medium"}}>{state?.row.transactionhash}</span>
</div>
  </div>
  <div className="detail-container">
  <div className={'detail-sub-container'}>
  <span style={{fontSize:"medium",paddingRight:'1%'}}>Destination Transaction Error:</span>
  <span style={{fontSize:"medium"}}>{state?.row.transactionhash}</span>
</div>
  </div>
  <div className="detail-container">
  <div className={'detail-sub-container'}>
  <span style={{fontSize:"medium",paddingRight:'1%'}}>Source User application:</span>
  <span style={{fontSize:"medium"}}>{state?.row.transactionhash}</span>
</div>
  </div>
  <div className="detail-container">
  <div className={'detail-sub-container'}>
  <span style={{fontSize:"medium",paddingRight:'1%'}}>Destination User application:</span>
  <span style={{fontSize:"medium"}}>{state?.row.transactionhash}</span>
</div>
  </div>
  <div className="detail-container">
  <div className={'detail-sub-container'}>
  <span style={{fontSize:"medium",paddingRight:'1%'}}>Source Block Number:</span>
  <span style={{fontSize:"medium"}}>{state?.row.blockNumber??'110413078'}</span>
</div>
  </div>
  <div className="detail-container">
  <div className={'detail-sub-container'}>
  <span style={{fontSize:"medium",paddingRight:'1%'}}>Source Block Hash:</span>
  <span style={{fontSize:"medium"}}>{state?.row.transactionhash}</span>
</div>
  </div>
  <div className="detail-container">
  <div className={'detail-sub-container'}>
  <span style={{fontSize:"medium",paddingRight:'1%'}}>Created:</span>
  <span style={{fontSize:"medium"}}>{state?.row.updatedDate}</span>
</div>
  </div>
  <div className="detail-container">
  <div className={'detail-sub-container'}>
  <span style={{fontSize:"medium",paddingRight:'1%'}}>ERC20 Tokens Transferred:</span>
  <span style={{fontSize:"medium",paddingRight:'1%'}}>From:</span>
  <span style={{fontSize:"medium",paddingRight:'2%'}}>{state?.row.updatedDate}</span>
  <span style={{fontSize:"medium",paddingRight:'1%'}}>To:</span>
  <span style={{fontSize:"medium",paddingRight:'2%'}}>{state?.row.updatedDate}</span>
  <span style={{fontSize:"medium",paddingRight:'1%'}}>Amount:</span>
  <span style={{fontSize:"medium",paddingRight:'2%'}}>{state?.row.updatedDate}</span>
</div>
  </div>
  <div className="detail-container">
  <div className={'detail-sub-container'}>
  <span style={{fontSize:"medium",paddingRight:'1%'}}>ERC20 Tokens Transferred:</span>
  <span style={{fontSize:"medium",paddingRight:'1%'}}>From:</span>
  <span style={{fontSize:"medium",paddingRight:'2%'}}>{state?.row.updatedDate}</span>
  <span style={{fontSize:"medium",paddingRight:'1%'}}>To:</span>
  <span style={{fontSize:"medium",paddingRight:'2%'}}>{state?.row.updatedDate}</span>
  <span style={{fontSize:"medium",paddingRight:'1%'}}>Amount:</span>
  <span style={{fontSize:"medium",paddingRight:'2%'}}>{state?.row.updatedDate}</span>

</div>
  </div>
  </div>
 
    </div>
           </Grid>
  </Grid>
      </Grid>
      </header>
    );
  }
  
  export default DetailPage;