import './global.css';
import { Routes, Route } from 'react-router-dom';

import { Navigation } from "./components/Navigation/Navigation";
import { Logo } from './components/Logo/Logo';
import { Footer } from './components/Footer/Footer';
import { Projects } from './components/Projects/Projects';
import { Certificates } from './components/Certificates/Certificates';

function App() {
    return (
        <div className='flex'>
            <div className='flex'>
                <div className="flex flex-col justify-between fixed bg-navigation-bg w-48 h-screen">
                    <Logo />
                    <Navigation />
                    <Footer />
                </div>
            </div>
            <div className='bg-body-bg w-full ml-48'>
                <Routes>
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/certificates' element={<Certificates />} />
                </Routes>
            </div>
        </div>
    )
}

export default App;
