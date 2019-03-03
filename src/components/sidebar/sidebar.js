import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import SideBarEntry from './sidebar-entry';
import { rhythm } from '../..//utils/typography';

const StyledList = styled(List)`
  min-width: ${rhythm(10)};
  color: teal;
`;

class SideBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render () {
    const { edges } = this.props;
    return (
      <StyledList>
        {edges.map((edge, index) => (
          <React.Fragment key={index}>
            <SideBarEntry edge={edge} />
            <Divider />
          </React.Fragment>
        ))}
      </StyledList>
    );
  };
}

SideBar.propTypes = {
  edges: PropTypes.any.isRequired
};

export default SideBar;
