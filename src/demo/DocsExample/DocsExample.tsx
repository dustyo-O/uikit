import React from 'react';
import block from 'bem-cn-lite';

import './DocsExample.scss';

export interface DocsExampleProps {
    children: React.ReactNode;
    distribute?: 'start' | 'end' | 'center';
    space?: 's' | 'm' | 'l';
}

const b = block('docs-example');

export function DocsExample({children, distribute = 'start', space = 'm'}: DocsExampleProps) {
    return (
        <div className={b({distribute, space})}>
            {React.Children.map(children, (elem, i) => (
                <div key={i} className={b('item')}>
                    {elem}
                </div>
            ))}
        </div>
    );
}
