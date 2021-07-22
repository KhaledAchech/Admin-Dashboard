import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Add from '@material-ui/icons/Cake';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    marginLeft : theme.spacing(15),
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '863px',
    height: '340px',
    top: '323px',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    borderRadius: '50px',
    width: '30%',
  },
  cancel: {
    margin: theme.spacing(2, 0, 2),
    borderRadius: '50px',
    width: '30%',
    left : '40%',
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Add />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add a pastry account
        </Typography>
        <form className={classes.form} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="pastryName"
            label="Pastry Name"
            name="pastryName"
            autoComplete="Pastry Name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="pastryDescription"
            label="Pastry Description"
            name="pastryDescription"
            autoComplete="Pastry Description"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="tel_number"
            label="Telephone Number"
            name="tel_number"
            autoComplete="Telephone Number"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            component = {Link}
            to = "../Tables/Tables"
          >
            Save
          </Button>
          <Button
            type="cancel"
            variant="contained"
            color="secondary"
            className={classes.cancel}
            component = {Link}
            to = "../Tables/Tables"
          >
            cancel
          </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}