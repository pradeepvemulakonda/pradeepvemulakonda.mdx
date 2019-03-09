import React from 'react';
import { MDXTag } from '@mdx-js/tag';

export default class CodeBlock extends React.Component {
    render() {
        const codeString = this.props.children;
        return <MDXTag name="code" children={codeString} ></MDXTag>;
    }
}
