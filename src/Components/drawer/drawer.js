import React from 'react';
import clsx from 'clsx';
import { Menu, MenuItem, Tooltip, Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MappingContent from '../mappingContent/mappingContent';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Dashboard from '../dashboard/dashboard';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#fafafa',
    color: "black",
    // borderBottom:'1px solid #e8e8e8',
    // borderRadius:"0px 0px 10px 10px",
    // boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.1)',
    // webkitBoxShadow: '0px 2px 5px 0px rgba(0,0,0,0.1)',
    // mozBoxShadow: '0px 2px 5px 0px rgba(0,0,0,0.1)',
    boxShadow:'none'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbarhead: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    // minHeight: '0px !important',
    borderRadius: '5px 5px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function DrawerBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const opened = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navitems = [
    {
      view: 'Dashboard',
      link: '/contentview/dashboard'
    },
    {
      view: 'Product Mapping',
      link: '/contentview/mappingview'
    },
    {
      view: 'Exim Documentation',
      link: ''
    },
    {
      view: 'FEED Foot Print',
      link: ''
    },
  ]
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap>
            FEED
          </Typography> */}
          <div style={{ position: 'absolute', right: '30px' }}>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <AccountCircleOutlinedIcon fontSize='large'>R</AccountCircleOutlinedIcon>
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={opened}
              onClose={handleClose}
              onClick={handleClose}
              // PaperProps={{
              //   elevation: 0,
              //   sx: {
              //     overflow: 'visible',
              //     filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              //     mt: 1.5,
              //     '& .MuiAvatar-root': {
              //       width: 32,
              //       height: 32,
              //       ml: -0.5,
              //       mr: 1,
              //     },
              //     '&:before': {
              //       content: '""',
              //       display: 'block',
              //       position: 'absolute',
              //       top: 0,
              //       right: 14,
              //       width: 10,
              //       height: 10,
              //       bgcolor: 'background.paper',
              //       transform: 'translateY(-50%) rotate(45deg)',
              //       zIndex: 0,
              //     },
              //   },
              // }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem>
                <ListItemIcon>
                  <PersonOutlineOutlinedIcon fontSize="small" />
                </ListItemIcon>
                Profile
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <SettingsIcon fontSize="small" />
                </ListItemIcon>
                Account Settings
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <DashboardOutlinedIcon fontSize="small" />
                </ListItemIcon>
                Dashboard
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <ExitToAppOutlinedIcon fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbarhead}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/feed logo.png`}
            width='35%'
            alt="feed-logo"
          />
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
        </div>
        <List>
          {navitems.map((item, index) => (
            <Grid component={Link} to={item.link} key={index}>
              <ListItem>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={item.view} />
              </ListItem>
            </Grid>
          ))}
        </List>
      </Drawer>
      <main
        style={{ backgroundColor: '#f7f7f7' }}
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Switch>
          <Route path='/contentview/dashboard' component={Dashboard}></Route>
          <Route path='/contentview/mappingview' component={MappingContent}></Route>
          <Redirect to='/contentview/mappingview' />
        </Switch>
      </main>
    </div>
  );
}

export default DrawerBar
