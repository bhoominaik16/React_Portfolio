import { Instagram, Mail, Linkedin, Github } from 'lucide-react';

 function Footer() {

    return(
    <footer>
        <div className='h-auto bg-violet-200 place-items-center p-2'>
            <div className='md:w-[20vw] grid grid-cols-4 gap-2  text-center place-items-center m-2'>
                <a href='https://www.instagram.com/bhoomi_naik16/' target='_blank'><Instagram size={32} /></a>
                <a href="mailto:bhoominaik16@gmail.com" target="_blank" rel="noopener noreferrer"><Mail size={32} /></a>
                <a href="https://www.linkedin.com/in/bhoomi-naik-4a84222a2/" target='_blank'><Linkedin size={32} /></a>
                <a href="https://github.com/bhoominaik16" target='_blank'><Github size={32} /></a>
            </div>
            <p className=' text-md'>&copy; {new Date().getFullYear()} Bhoomi Naik</p>
        </div>
    </footer>
    )
    
}

export default Footer
