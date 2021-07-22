import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Priority from '../PriorityChoice/Priority';
import DetailsIcon from '@material-ui/icons/DeveloperBoard';
import BlockIcon from '@material-ui/icons/BlockRounded';
import { lighten, makeStyles } from '@material-ui/core/styles';
import 
    {
        Table,
        TableBody,
        TableCell, 
        TableContainer,
        TableHead,
        TablePagination,
        TableRow,
        TableSortLabel,
        Toolbar,
        Typography,
        Paper,
        Checkbox,
        IconButton,
        Tooltip,
        FormControlLabel,
        Avatar,
        Grid,
        Switch
    } from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import faker from 'faker';

function createData(name,email , phone,  description, publishDate, status) {
  return { name, email, phone, description, publishDate, status };
}

let STATUSES = ['Published', 'Ready', 'Postponed'];
const rows = [
  createData(faker.name.findName(),faker.internet.email(),faker.phone.phoneNumber(), faker.name.jobDescriptor(), faker.date.past().toLocaleDateString('en-US'), STATUSES[Math.floor(Math.random() * STATUSES.length)]),
  createData(faker.name.findName(),faker.internet.email(),faker.phone.phoneNumber(), faker.name.jobDescriptor(), faker.date.past().toLocaleDateString('en-US'), STATUSES[Math.floor(Math.random() * STATUSES.length)]),
  createData(faker.name.findName(),faker.internet.email(),faker.phone.phoneNumber(), faker.name.jobDescriptor(), faker.date.past().toLocaleDateString('en-US'), STATUSES[Math.floor(Math.random() * STATUSES.length)]),
  createData(faker.name.findName(),faker.internet.email(),faker.phone.phoneNumber(), faker.name.jobDescriptor(), faker.date.past().toLocaleDateString('en-US'), STATUSES[Math.floor(Math.random() * STATUSES.length)]),
  createData(faker.name.findName(),faker.internet.email(),faker.phone.phoneNumber(), faker.name.jobDescriptor(), faker.date.past().toLocaleDateString('en-US'), STATUSES[Math.floor(Math.random() * STATUSES.length)]),
  createData(faker.name.findName(),faker.internet.email(),faker.phone.phoneNumber(), faker.name.jobDescriptor(), faker.date.past().toLocaleDateString('en-US'), STATUSES[Math.floor(Math.random() * STATUSES.length)]),
  createData(faker.name.findName(),faker.internet.email(),faker.phone.phoneNumber(), faker.name.jobDescriptor(), faker.date.past().toLocaleDateString('en-US'), STATUSES[Math.floor(Math.random() * STATUSES.length)]),
  createData(faker.name.findName(),faker.internet.email(),faker.phone.phoneNumber(), faker.name.jobDescriptor(), faker.date.past().toLocaleDateString('en-US'), STATUSES[Math.floor(Math.random() * STATUSES.length)]),
  createData(faker.name.findName(),faker.internet.email(),faker.phone.phoneNumber(), faker.name.jobDescriptor(), faker.date.past().toLocaleDateString('en-US'), STATUSES[Math.floor(Math.random() * STATUSES.length)]),
  createData(faker.name.findName(),faker.internet.email(),faker.phone.phoneNumber(), faker.name.jobDescriptor(), faker.date.past().toLocaleDateString('en-US'), STATUSES[Math.floor(Math.random() * STATUSES.length)]),
  createData(faker.name.findName(),faker.internet.email(),faker.phone.phoneNumber(), faker.name.jobDescriptor(), faker.date.past().toLocaleDateString('en-US'), STATUSES[Math.floor(Math.random() * STATUSES.length)]),
  createData(faker.name.findName(),faker.internet.email(),faker.phone.phoneNumber(), faker.name.jobDescriptor(), faker.date.past().toLocaleDateString('en-US'), STATUSES[Math.floor(Math.random() * STATUSES.length)]),
  createData(faker.name.findName(),faker.internet.email(),faker.phone.phoneNumber(), faker.name.jobDescriptor(), faker.date.past().toLocaleDateString('en-US'), STATUSES[Math.floor(Math.random() * STATUSES.length)]),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Publishing Pastry' },
  { id: 'Post_Description', numeric: false, disablePadding: false, label: 'Post Description' },
  { id: 'publish_Date', numeric: false, disablePadding: false, label: 'Publish Date' },
  { id: 'Status', numeric: false, disablePadding: false, label: 'Status' },
  { id: 'Priority', numeric: false, disablePadding: false, label: 'Priority' },
  { id: 'Action', numeric: false, disablePadding: false, label: 'Action' }
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead >
      <TableRow>
        <TableCell className={classes.tableHeaderCell} padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all Posts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell className={classes.tableHeaderCell}
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
  iconHide: 
  {
    opacity:'0%',
  },
  iconShow: 
  {
    opacity:'100%',
  }
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Posts
        </Typography>
      )}
        {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
          <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
          </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

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

export default function CheckBoxTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('jobTitle');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer className={classes.tableContainer}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      //onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          onClick={(event) => handleClick(event, row.name)}
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
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
                      <TableCell align="Left">
                      <Typography color="primary" variant="subtitle2">{row.description}</Typography>
                      </TableCell>
                      <TableCell align="Left">{row.publishDate}</TableCell>
                      <TableCell align="Left">
                      <Typography 
                        className={classes.status}
                        style={{
                        backgroundColor: 
                        ((row.status === 'Published' && 'green') ||
                        (row.status === 'Ready' && 'blue') ||
                        (row.status === 'Postponed' && 'orange'))
                        }}>
                        {row.status}
                        </Typography>
                        </TableCell>
                        <TableCell align="Left">
                        <Priority/>
                        </TableCell>
                        <TableCell align="Left">
                          <div>
                            <Tooltip title="Details" className={classes.icon}>
                                <IconButton aria-label="Details">
                                <DetailsIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Block" className={classes.icon}>
                                <IconButton aria-label="Block">
                                <BlockIcon />
                                </IconButton>
                            </Tooltip>
                          </div>
                        </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}
