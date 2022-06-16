import useToggle from 'hooks/useToggle';
import React from 'react';
import AccordionContent from './AccordionContent';
import AccordionHeader from './AccordionHeader';

const AccordionContainer = ({ children, header }) => {

    const { status, toggleStatus } = useToggle();

    return (
        <div >
            
            <AccordionHeader expanded={status} toggleExpanded={toggleStatus}>
                {header}
            </AccordionHeader>
            <AccordionContent expanded={status}>
                {children}
            </AccordionContent>
        </div>)

}

export default AccordionContainer;