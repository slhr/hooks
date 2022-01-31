import React, {useCallback, useRef} from "react";

const UseDebounce = (callback, delay) => {
    const timer = useRef();

    return useCallback((...args) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }

        timer.current = setTimeout(() => {
            callback(...args);
        }, delay);

    }, [callback, delay]);


};

export default UseDebounce;