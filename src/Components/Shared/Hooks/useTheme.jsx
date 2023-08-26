import React, { useState } from 'react';

const useTheme = () => {
    const [dayIcon, setDayIcon] = useState(localStorage.getItem('theme') === 'dark' ? 'swap-off' : 'swap-on');
    const [nightIcon, setNightIcon] = React.useState(localStorage.getItem('theme') === 'light' ? 'swap-off' : 'swap-on');
    const [theme, setTheme] = React.useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    React.useEffect(() => {
        setDayIcon(localStorage.getItem('theme') === 'dark' ? 'swap-off' : 'swap-on');
        setNightIcon(localStorage.getItem('theme') === 'light' ? 'swap-off' : 'swap-on');
    }, [theme]);

    return (
        {
            dayIcon,
            nightIcon,
        }
    );
};

export default useTheme;