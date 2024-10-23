import './global.css';
import { Routes, Route } from 'react-router-dom';

import AppProvider from './contexts/AppContext';
import { Navigation } from "./components/Navigation/Navigation";
import { Logo } from './components/Logo/Logo';
import { Footer } from './components/Footer/Footer';
import { Projects } from './components/Projects/Projects';
import { Certificates } from './components/Certificates/Certificates';
import { Contacts } from './components/Contacts/Contacts';
import { About } from './components/About/About';
import { ScrollTop } from './components/ScrollTop/ScrollTop';
import { Home } from './components/Home/Home';
import { HamMenu } from './components/HamburgerMenu/HamMenu';

function App() {

    return (
        <AppProvider>
            <div className='flex'>
                <div className='hidden lg:flex'>
                    <div className={`flex flex-col justify-between fixed bg-navigation-bg w-48 h-screen`}>
                        <Logo />
                        <Navigation />
                        <Footer />
                    </div>
                </div>
                <ScrollTop />
                <div className={`flex flex-col justify-between bg-body-bg 
                                lg:ml-48 lg:w-full lg:min-h-screen`}>
                    <HamMenu />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/projects' element={<Projects />} />
                        <Route path='/certificates' element={<Certificates />} />
                        <Route path='/contacts' element={<Contacts />} />
                    </Routes>
                </div>
            </div>
        </AppProvider>
    )
}

export default App;
