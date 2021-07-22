import faker from 'faker';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DetailsIcon from '@material-ui/icons/DeveloperBoard';
import S_Bar from '../SearchBar/S_Bar';
import { 
    Table,
    TableBody,
    Button,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    IconButton,
    Tooltip,
    TableFooter
 } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  root: {
    margin: '30px 325px',
    width: '75%',
    },
    table: {
      minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    button: {
      margin: theme.spacing(1),
      left : '70%',
    },
    title: {
      margin: theme.spacing(1),
      fontWeight: 'bold',
      fontSize : '30px',
      right : '10%'
    },

  }));

let ORDERS = [], STATUSES = ['Delivered', 'Pending', 'Canceled'];
for(let i=0;i<14;i++) {
    ORDERS[i] = {
        ID: faker.random.uuid(),
        Pastry: faker.company.companyName,
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        ToClient: faker.name.findName(),
        Date: faker.date.past().toLocaleDateString('en-US'),
        Due_Date: faker.date.future().toLocaleDateString('en-US'),
        status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
    }
}

function OrderTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
      <Typography className={classes.title} variant="h6" id="tableTitle">
          List of Orders :
        </Typography>
      <TableContainer component={Paper} className={classes.tableContainer} >
        <S_Bar/>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Order ID</TableCell>
            <TableCell className={classes.tableHeaderCell}>From : Pastry</TableCell>
            <TableCell className={classes.tableHeaderCell}>To : Client</TableCell>
            <TableCell className={classes.tableHeaderCell}>Date of creation</TableCell>
            <TableCell className={classes.tableHeaderCell}>Due Date</TableCell>
            <TableCell className={classes.tableHeaderCell}>Status</TableCell>
            <TableCell align="Center" className={classes.tableHeaderCell}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ORDERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.ID}>
                <TableCell>
                {row.ID}
                </TableCell>
              <TableCell>
                  <Grid container>
                      <Grid item lg={10}>
                          <Typography className={classes.name}>{row.Pastry}</Typography>
                          <Typography color="primary" variant="subtitle2">{row.email}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.phone}</Typography>
                      </Grid>
                  </Grid>
                </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.ToClient}</Typography>
                  <Typography color="textSecondary" variant="body2">{row.phone}</Typography>
                </TableCell>
              <TableCell>{row.Date}</TableCell>
              <TableCell>{row.Due_Date}</TableCell>
              <TableCell>
                  <Typography 
                    className={classes.status}
                    style={{
                        backgroundColor: 
                        ((row.status === 'Delivered' && 'green') ||
                        (row.status === 'Pending' && 'blue') ||
                        (row.status === 'Canceled' && 'red'))
                    }}
                  >{row.status}</Typography>
                </TableCell>
                <TableCell align="Left">
                  <Tooltip title="Details" className={classes.icon}>
                      <IconButton aria-label="Details">
                        <DetailsIcon />
                          </IconButton>
                  </Tooltip>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
        <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={ORDERS.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </TableFooter>
      </Table>
    </TableContainer>
    </Paper>
    </div>

 
  );
}

export default OrderTable;