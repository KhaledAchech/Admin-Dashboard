import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import faker from 'faker';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '30px 325px',
        width: '75%',
      },
      paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
      },
      visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
      },
      table: {
        minWidth: 650,
      },
      tableContainer: {
          borderRadius: 15
      },
      tableHeaderCell: {
          fontWeight: 'bold',
          fontSize : '20px',
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.getContrastText(theme.palette.primary.dark)
      },
      avatar: {
          margin:'8px 2px',
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
      icon : {
        padding: '3px',
      }
    }));

function createData(name,email , phone,  subject, date, message) {
  return {
    name,
    email,
    phone,
    subject,
    date,
    message,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  return (
    <React.Fragment>
    <TableRow>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
        <Grid container>
            <Grid item lg={2}>
                <Avatar alt={row.name} src='.' className={classes.avatar}/>
            </Grid>
            <Grid item lg={10}>
                <Typography className={classes.name}>{row.name}</Typography>
                <Typography color="textSecondary" variant="body2">{row.email}</Typography>
                <Typography color="textSecondary" variant="body2">{row.phone}</Typography>
            </Grid>
        </Grid>
        </TableCell>
        <TableCell align="left">{row.subject}</TableCell>
        <TableCell align="left">{row.date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Message
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row.message}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
    createData(faker.name.findName(),faker.internet.email(),faker.phone.phoneNumber(), faker.name.jobTitle(), faker.date.past().toLocaleDateString('en-US'), faker.lorem.words(600)),
    createData(faker.name.findName(),faker.internet.email(),faker.phone.phoneNumber(), faker.name.jobTitle(), faker.date.past().toLocaleDateString('en-US'), faker.lorem.words(600)),
    createData(faker.name.findName(),faker.internet.email(),faker.phone.phoneNumber(), faker.name.jobTitle(), faker.date.past().toLocaleDateString('en-US'), faker.lorem.words(600)),
    createData(faker.name.findName(),faker.internet.email(),faker.phone.phoneNumber(), faker.name.jobTitle(), faker.date.past().toLocaleDateString('en-US'), faker.lorem.words(600)),
    createData(faker.name.findName(),faker.internet.email(),faker.phone.phoneNumber(), faker.name.jobTitle(), faker.date.past().toLocaleDateString('en-US'), faker.lorem.words(600)),
];

export default function CollapsibleTable() {
    
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>User</TableCell>
            <TableCell align="left">Subject</TableCell>
            <TableCell align="left">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}