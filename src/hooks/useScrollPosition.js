import { useEffect, useState } from 'react';

const useScrollPosition = () => {
    const [scroll, setScroll] = useState(0);
    const handleScroll = () => setScroll(window.scrollY);

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    });

    return scroll;
};

export default useScrollPosition;
