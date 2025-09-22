import logo from '../assets/Bhoomi_Logo.png'
import { Menu, X} from 'lucide-react'
import { useState } from 'react'
import {Link} from 'react-router-dom'

function Navbar(){

    const[showmenu, setShowmenu] = useState(false)
    function responsivemenu(){
        setShowmenu(!showmenu)
    }

    return(
        <header >
            <nav >
                <div className='relative max-h-[10vh] p-5 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center md:justify-between z-50'>
                    <div className='md:mx-10 mx-5'>
                        <Link to='/Pages/Home'><img className='max-h-[8vh] md:max-h-[10vh] p-2' src={logo} alt="Website logo" /></Link>
                    </div>
                        {!showmenu ? 
                            <button onClick={responsivemenu} className='md:hidden absolute right-5'><Menu  size={48}/></button>
                        : 
                            <button onClick={responsivemenu} className='md:hidden absolute right-5'><X size={48}/></button>
                        }
                    <div className={`
                        ${showmenu ? 'flex ' : 'hidden'} absolute top-[10vh] left-0  min-h-[40vh] w-full md:w-auto md:static md:min-h-full md:flex  `}>
                        <ul className='flex flex-col text-white gap-[5vh] my-auto md:items-center justify-center md:flex-row md:gap-[4vw] font-semibold text-2xl mx-10'>
                            <Link to='/Pages/Home' className='hover:text-slate-400'>Home</Link>
                            <Link to='/Pages/About' className='hover:text-slate-400'>About</Link>
                            <Link to='/Pages/Projects' className='hover:text-slate-400'>Projects</Link>
                            <Link to='/Pages/Contact' className='hover:text-slate-400'>Contact</Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar