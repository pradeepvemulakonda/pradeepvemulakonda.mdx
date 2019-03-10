import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import styled from 'styled-components';
import Normalizer from 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';

// Create a new Normalizer object
var nw = new Normalizer({
    'remove-trailing': true,
    'remove-indent': true,
    'left-trim': true,
    'right-trim': true,
    'break-lines': 80,
    'indent': 0,
    'remove-initial-line-feed': false,
    'tabs-to-spaces': 4,
    'spaces-to-tabs': 4
});


export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`

export const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`

export default class CodeBlock extends React.Component {
    render() {
        const children = this.props.children;
        const codeString = Array.isArray(children) ? children[0] : children;

        const exampleCode = nw.normalize(codeString);
        return (
            <Highlight {...defaultProps} theme={theme} code={exampleCode} language="java">
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <Pre className={className} style={style}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i }) }>
                                {/*<LineNo>{i + 1}</LineNo>*/}
                                {line.map((token, key) => <span {...getTokenProps({ token, key }) } />)}
                            </div>
                        ))}
                    </Pre>
                )}
            </Highlight>
        );
    }
}
