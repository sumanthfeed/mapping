import React from 'react'
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
function ForgotPassword() {
  const classes = useStyles();
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
        <form>
          <Grid lg={12} md={12} sm={12} xs={12} item>
            <TextField
              fullWidth
              variant='outlined'
              size='small'
              label='Enter New Password'
              margin='normal'
            />
          </Grid>
          <Grid lg={12} md={12} sm={12} xs={12} item>
            <TextField
              fullWidth
              variant='outlined'
              size='small'
              label='ReEnter Password'
              margin='normal'
            />
          </Grid>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px 0px' }}>
            <Grid lg={12} md={12} sm={12} xs={12} item>
              <button type='submit' className='btn btn-primary'>Submit</button>
            </Grid>
          </div>
        </form>
      </div>
    </>

  )
}

export default ForgotPassword