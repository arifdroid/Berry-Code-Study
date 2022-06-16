import React from 'react';

const AccordionHeader = ({ toggleExpanded, children, expanded }) => {
    return (
        <button onClick={toggleExpanded}>
            {children} <span>{expanded ? '-' : '+'}</span>
        </button>
    )
}

export default AccordionHeader;