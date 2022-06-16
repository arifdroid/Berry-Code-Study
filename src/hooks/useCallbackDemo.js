import List from 'components/list/List';
import React, { useCallback, useState } from 'react';


const DemoCallbackHook = () => {

    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2]
    }, [number])

    const theme = {
        backgroundColor: dark ? '#333' : 'yellow',
        color: dark ? '#FFF' : "#333"
    }


    return (
        <div style={theme}>
            <input
                type="number"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
            <List getItems={getItems} />
        </div>
    )
}

export default DemoCallbackHook;