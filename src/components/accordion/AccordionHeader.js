import React, { useContext } from 'react';
import { AccordionContext } from './AccordionWithContext';

const AccordionHeader = ({ children }) => {

    const { expanded, toggleExpanded } = useContext(AccordionContext);


    return (
        // <>as</>
        <button
        onClick={toggleExpanded}
        >
            {children}
            <span>{expanded ? '-' : '+'}</span>
        </button>
    )
}

export default AccordionHeader;