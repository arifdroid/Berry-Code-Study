import { useCallback, useMemo, useState } from 'react';

const useToggle = () => {
    const [status, setStatus] = useState(false);

    const toggleStatus = useCallback(() => {
        setStatus(prevState => !prevState);
    }, [])

    const values = useMemo(
        () => ({
            status,
            toggleStatus
        })
        ,
        [status, toggleStatus]
    )

    return values

}

export default useToggle;