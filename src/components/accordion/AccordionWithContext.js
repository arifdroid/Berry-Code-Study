import useToggle from 'hooks/useToggle';
import React, { createContext } from 'react';
import AccordionContent from './AccordionContent';
import AccordionHeader from './AccordionHeader';

export const AccordionContext = createContext(null);

const { Provider } = AccordionContext;


const AccordionWContext = ({ header, children }) => {

    const { status: expanded, toggleStatus: toggleExpanded } = useToggle();
    
    return (
        <Provider value={{
            expanded,
            toggleExpanded
        }}>
            <div>

                <AccordionHeader >{header}</AccordionHeader>
                <AccordionContent >{children}</AccordionContent>

            </div>

        </Provider>
    )
}

export default AccordionWContext;