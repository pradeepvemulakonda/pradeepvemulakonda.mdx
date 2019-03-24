import React from 'react';
import styled from 'styled-components';

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`;

export const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`;

export default class ResponsiveTable extends React.Component {
  render () {
    return (
      <div class="hello">
        {this.props.children}
      </div>
    );
  }
}
