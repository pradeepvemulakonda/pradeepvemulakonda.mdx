import React from 'react';
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

const StyledTopAppBar = styled(AppBar)`
  background-color: ${props => props.theme.pbg};
  color: ${props => props.theme.pfg};
`;

const Heading = styled.h3`
  flex-grow: 1;
  margin: 0;
`;

const Root = styled.div`
  flex-grow: 1;
`;

const MenuButton = styled(IconButton)`
  margin-right: 0.5rem;
  margin-left: -0.5rem;
`;

const NavigationHeader = (props) => {
  const { handleClick } = props;
  return (
    <Root>
      <StyledTopAppBar position='static'>
        <Toolbar>
          <MenuButton color='inherit' aria-label='Menu' onClick={handleClick()}>
            <MenuIcon />
          </MenuButton>
          <Heading>
            Design Thinking
          </Heading>
          <IconButton
            aria-label='Profile'
            aria-haspopup='true'
            color='inherit'
            onClick={() => {
              navigate(
                '/profile',
                { replace: false }
              );
            }}
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </StyledTopAppBar>
    </Root>
  );
};

NavigationHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default NavigationHeader;
