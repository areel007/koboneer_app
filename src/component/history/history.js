import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './history.css';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#494949',
        color: '#fff',
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#f9f9f9',
        },
    },
}))(TableRow);

function createData(token, transactionType, status, date, amount) {
    return { token, transactionType, status, date, amount };
}

const rows = [
    createData('kobo0235token', 'Buy For Me', 'Successful', '01/01/2020', '105,000.00'),
    createData('kobo5643token', 'Buy For Me', 'Successful', '03/05/2020', '54,000.00'),
    createData('kobo0001token', 'Sell For Me', 'Successful', '03/30/2020', '207,000.00'),
    createData('kobo2502token', 'Trade E-Currency', 'Successful', '05/10/2020', '500,000.00'),
    createData('kobo1926token', 'Buy For Me', 'Failed', '28/05/2020', '402,000.00'),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const History = () => {

    const classes = useStyles();
    const success = {
        color: 'green',
    };
    const failure = {
        color: 'red',
    };

    return (
        <div id='history'>
            <div id='inner-history'>
                <h2>Transaction History</h2>
                <div id='search-box'>
                    <input type='text' />
                    <button id='search-icon'>
                        <i class="fas fa-search"></i>
                    </button>
                </div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Token</StyledTableCell>
                                <StyledTableCell align="left">Transaction Type</StyledTableCell>
                                <StyledTableCell align="left">Status</StyledTableCell>
                                <StyledTableCell align="left">Date</StyledTableCell>
                                <StyledTableCell align="left">Amount</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.token}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.token}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{row.transactionType}</StyledTableCell>
                                    <StyledTableCell align="left" style={ row.status === 'Successful' ? success : failure }>{row.status}</StyledTableCell>
                                    <StyledTableCell align="left">{row.date}</StyledTableCell>
                                    <StyledTableCell align="left">&#8358;{row.amount}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default History;