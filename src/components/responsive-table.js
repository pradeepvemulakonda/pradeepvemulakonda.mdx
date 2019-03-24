import React from 'react';
import styled from 'styled-components';

export const OverflowWrapper = styled.div`
    overflow-x: auto;
`;

export default class ResponsiveTable extends React.Component {
  render () {
    return (
      <OverflowWrapper>
        {this.props.children}
      </OverflowWrapper>
    );
  }
}
