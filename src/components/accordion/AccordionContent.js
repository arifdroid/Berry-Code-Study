import React from 'react';

const AccordionContent = ({ children, expanded }) => {
    return <>{expanded && children}</>
}

export default AccordionContent;