import React, { createContext, useState } from 'react'
import Footer from './footer'
import Main from './Main'
import TopNav from './TopNav'

const ThemeContext = createContext();
export { ThemeContext };

const Demo = () => {

    const [darkThemeEnabled, setDarkThemeEnabled] = useState(false);

    return (
        <div style={{padding: '40px'}}>
            <ThemeContext.Provider value={
                {
                darkMode: darkThemeEnabled,
                updateDarkMode: setDarkThemeEnabled
                }
            }>
                <TopNav />
                <Main />
            </ThemeContext.Provider>
            <Footer />
        </div>
    )
}

export default Demo