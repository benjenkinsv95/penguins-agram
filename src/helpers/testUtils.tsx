import React from 'react';
import ReactDOM from 'react-dom';

export const itRendersWithoutCrashing = (component: JSX.Element | React.DOMElement<React.DOMAttributes<Element>, Element>) => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(component, div);
        ReactDOM.unmountComponentAtNode(div);
    });
}
