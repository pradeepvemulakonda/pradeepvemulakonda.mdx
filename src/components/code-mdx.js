import React from 'react';
import CompareLang from '../components/compare/compare-lang';
import CompareTab from '../components/compare/tab';
import remark from 'remark';
import react2remark from 'remark-react';
import CodeBlock from './code-block';
import { filterChildren } from '../utils/utils';

const buildCompareComponent = (components) => {
    const tabWrapperData = [];
    let tabData = [];

    components.forEach((component) => {
        if (component.type === 'hr') {
            tabData = [];
            tabWrapperData.push(tabData);
        } else {
            tabData.push(component);
        }
    });

    return (
        <CompareLang>
            {
                tabWrapperData.map(function (component, index) {
                    return <CompareTab>{component}</CompareTab>;
                })
            }
        </CompareLang>
    )
}

export default (props) => {
    const { className, children } = props;
    const exampleCode = children;

    if (className === 'language-compare') {
        const vFile = remark()
            .use(react2remark,
            {
                createElement: React.createElement,
                remarkReactComponents: {
                    code: CodeBlock
                }
            }
            ).processSync(exampleCode);

        const filteredChildren = filterChildren(vFile.contents.props.children, (child) => typeof child === 'object');
        if (filteredChildren[0].type !== 'hr') throw Error('compare should start with hr');

        return (
            <div>
                {buildCompareComponent(filteredChildren)}
            </div>
        );
    } else {
        return (
            <div>
                <CodeBlock>{exampleCode}</CodeBlock>
            </div>
        );
    }
};