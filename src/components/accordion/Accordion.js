import useToggle from 'hooks/useToggle';
import React, { useState } from 'react';

// STUDY :: Composition Refactor Style 
const Accordion = () => {

    // const [expanded, setExpanded] = useState();

    const { status: expanded, toggleStatus: setExpanded } = useToggle();


    const toggleExpanded = () => {
        setExpanded(prevState => !prevState)
    }

    return (
        <div>
            <button onClick={toggleExpanded}>
                Header <span>{expanded ? "-" : "+"}</span>
            </button>
            {expanded && <div>Content</div>}
        </div>
    )
}

export default Accordion;