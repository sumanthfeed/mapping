import React, { useState } from 'react'
import { Grid, MenuItem, TextField, makeStyles, FormControlLabel, Checkbox, FormGroup, Divider, } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  loginFormWrap: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    padding: "10px 10px",
    borderRadius: '10px 10px',
    boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.75)',
    webkitBoxShadow: '0px 0px 3px 0px rgba(0,0,0,0.75)',
    mozBoxShadow: '0px 0px 3px 0px rgba(0,0,0,0.75)',
  }
}));
function Login() {
  const classes = useStyles();

  const [credentials, setCredentials] = useState({
    userid: '',
    password: ''
  })

  const { userid, password } = credentials;
  const changehandler = (e) => (
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  )

  const loginSubmitHandler = (e) => (
    e.preventDefault(),
    console.log(credentials)
  )
  return (
    <>
      <div className={classes.loginFormWrap}>
        <div style={{ textAlign: "center" }}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/feed logo.png`}
            width='20%'
            alt="feed-logo"
          />
        </div>
        <form onSubmit={loginSubmitHandler}>
          <Grid lg={12} md={12} sm={12} xs={12} item>
            <TextField
              fullWidth
              variant='outlined'
              size='small'
              label='User Id'
              margin='normal'
              name='userid'
              value={userid}
              onChange={changehandler}

            />
          </Grid>
          <Grid lg={12} md={12} sm={12} xs={12} item>
            <TextField
              fullWidth
              type='password'
              variant='outlined'
              size='small'
              label='Password'
              margin='normal'
              name='password'
              value={password}
              onChange={changehandler}
            />
          </Grid>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px 0px' }}>
            <Grid lg={6} md={12} sm={12} xs={12} item>
              <button type='submit' className='btn btn-primary'>Login</button>
            </Grid>
            <Grid lg={6} md={12} sm={12} xs={12} item>
              <Link to='/forgotpassword' style={{ float: 'right' }}>Forgot Password?</Link>
            </Grid>
          </div>
        </form>
      </div>
    </>

  )
}

export default Login