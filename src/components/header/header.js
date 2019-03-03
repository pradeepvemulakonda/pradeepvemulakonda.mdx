import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PropTypes from 'prop-types';

const StyledTopAppBar = styled(AppBar)`
  background-color: ${props => props.theme.pbg};
  color: ${props => props.theme.pfg};
`;
const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const NavigationHeader = (props) => {
  const { classes, handleClick } = props;
  return (
    <div className={classes.root}>
      <StyledTopAppBar position='static'>
        <Toolbar>
          <IconButton className={classes.menuButton} color='inherit' aria-label='Menu' onClick={handleClick()}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' color='inherit' className={classes.grow}>
            Design Thinking
          </Typography>
          <IconButton
            aria-label='Profile'
            aria-haspopup='true'
            color='inherit'
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </StyledTopAppBar>
    </div>
  );
};

NavigationHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default withStyles(styles)(NavigationHeader);
