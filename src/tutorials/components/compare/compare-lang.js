import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import remark from 'remark';
import remark2react from 'remark-react';
import SwipeableViews from 'react-swipeable-views';

export default class CompareLang extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  filterChildren = (children, conditionTester) => {
    return React.Children.map(children, child => {
      if (!conditionTester(child)) {
        return;
      }
      return child;
    });
  }

  render () {
    const { children } = this.props;
    const filteredChildren = this.filterChildren(children, (child) => typeof child === 'object');
    console.log(filteredChildren);
    return (
      <Paper square>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          variant='fullWidth'
          indicatorColor='primary'
          textColor='primary'
        >
          <Tab label='C#' />
          <Tab label='Java' />
        </Tabs>
        <SwipeableViews
          axis={'x-reverse'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          {filteredChildren}
        </SwipeableViews>
      </Paper>
    );
  }
}

CompareLang.propTypes = {
  children: PropTypes.array.isRequired
};
