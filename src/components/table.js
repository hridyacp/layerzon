import * as React from 'react';
    import { styled } from '@mui/material/styles';
    import Table from '@mui/material/Table';
    import TableBody from '@mui/material/TableBody';
    import TableCell, { tableCellClasses } from '@mui/material/TableCell';
    import TableContainer from '@mui/material/TableContainer';
    import TableHead from '@mui/material/TableHead';
    import TableRow from '@mui/material/TableRow';
    import Paper from '@mui/material/Paper';
import './navigation.css';
import { Navigate, useNavigate, useNavigation } from 'react-router-dom';

 
const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#42424B',
      color: 'grey',
      borderBottom: '2px solid black'
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      color:'white',
      borderBottom: '2px solid black'
    },
  }));
  const StyledTableCellStatus = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#42424B',
      color: 'grey',
      borderBottom: '2px solid black'
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 10,
      color:'white',
      borderBottom: '2px solid black'
    },
  }));
  
  const StyledTableRow = styled(TableRow)(() => ({
   
      backgroundColor: '#151515',
    color:'white',
    border: 'black',
    cursor: "pointer",
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  
    function createData(
        status,
        transactionhash,
        originChain,
        destinationChain,
        updatedDate,
        transactionName
    ) {
      return { status, transactionhash, originChain, destinationChain, updatedDate,transactionName };
    }
    
    const rows = [
      createData('PENDING', '0x6e2c4cf43fd18e00d5a6809f11e1e8b1e159bd5711b7600166382cbdd1a71117', 6.0, 24, "29 Sep, 2023","Cross chain message"),
      createData('PENDING','0x6e2c4cf43fd18e00d5a6809f11e1e8b1e159bd5711b7600166382cbdd1a71117', 9.0, 37, "29 Sep, 2023","Cross chain message"),
      createData('DELIVERED', '0x6e2c4cf43fd18e00d5a6809f11e1e8b1e159bd5711b7600166382cbdd1a71117', 16.0, 26, "29 Sep, 2023","Cross chain message"),
      createData('DELIVERED', '0x6e2c4cf43fd18e00d5a6809f11e1e8b1e159bd5711b7600166382cbdd1a71117', 3.7, 67, "29 Sep, 2023","Cross chain message"),
      createData('PENDING', '0x6e2c4cf43fd18e00d5a6809f11e1e8b1e159bd5711b7600166382cbdd1a71117', 8.0, 49, "29 Sep, 2023","Cross chain message"),
    ];
   
function TableTransaction() {
  const navigate= useNavigate();
    const getDetails=(row)=>{
      console.log(row,"row")
 navigate('/detailPage',{state:{row:row}})

    }
      return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell align="right">Transactionhash</StyledTableCell>
                <StyledTableCell align="right">Origin chain</StyledTableCell>
                <StyledTableCell align="right">Destination chain</StyledTableCell>
                <StyledTableCell align="right">Created</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.destinationChain} onClick={()=>getDetails(row)}>
                  <StyledTableCellStatus component="th" scope="row">
                  <button className={row.status==='PENDING'?'status':'status-del'}>{row.status}</button>
                  </StyledTableCellStatus>
                  <StyledTableCell align="right">{row.transactionhash}</StyledTableCell>
                  <StyledTableCell align="right">{row.originChain}</StyledTableCell>
                  <StyledTableCell align="right">{row.destinationChain}</StyledTableCell>
                  <StyledTableCell align="right">29 Sep, 2023</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    }
  export default TableTransaction;