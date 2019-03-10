import React from 'react';

export const filterChildren = (children, conditionTester) => {
    return React.Children.map(children, child => {
        if (!conditionTester(child)) {
            return;
        }
        return child;
    });
}