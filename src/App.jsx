import './global.css'; 

import { Navigation } from "./components/Navigation/Navigation";
import { Logo } from './components/Logo/Logo';
import { Footer } from './components/Footer/Footer';

function App() {
    return (
        <div className='flex'>
            <div className="flex flex-col justify-between bg-navigation-bg w-48 h-screen">
                <Logo />
                <Navigation />
                <Footer />
            </div>
        </div>
    )
}

export default App;
