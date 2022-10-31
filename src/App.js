import React, {useState} from 'react'
import { Navbar } from './components/Navbar';
import Routes from './components/Routes';
import { Footer } from './components/Footer';
import Search from './components/Search';


function App() {
    const [darkTheme,setDarkTheme] = useState(false);
    return(
        <div className={darkTheme ? 'dark': ''}>
           <div className='bg-gray-100 text-gray-800 min-h-screen dark:bg-gray-900 dark:text-slate-200'>
                <Navbar dakTheme={darkTheme} setDarkTheme={setDarkTheme}/>
                <Routes/>
                <Footer/>
           </div>
        </div>
    )
}

export default App;

