import React, { useContext } from 'react';
import { AccordionContext } from './AccordionWithContext';

const AccordionContent = ({ children }) => {
    const { expanded } = useContext(AccordionContext);

    return <>{expanded && children}</>
}

export default AccordionContent;