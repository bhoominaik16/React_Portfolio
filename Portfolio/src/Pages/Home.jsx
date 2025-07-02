import Bhoomi_Anime from '../assets/Bhoomi_Anime.png'
import {Link} from 'react-router-dom'

function Home(){

    return(
        <section className='max-h-[90vh] md:p-[5vh] p-[2vh]'>
            <div >
                <div className="min-h-[43vh] md:min-h-[55vh] mx-auto bg-white flex items-center md:items-center justify-center ">
                    <div className='max-w-[50%]'>
                        <h3 className='text-xl'>I am Bhoomi Naik</h3>
                        <h1 className='text-4xl md:text-6xl text-wrap font-bold max-w-[80%] mb-4'>An Aspiring Engineer from Mumbai</h1>
                        <Link to={'/Pages/Contact'} className=' bg-purple-800 text-white text-2xl p-2 border border-purple-800 shadow-lg rounded-lg '><button className='animate-bounce'>Reach Me Out</button></Link>
                    </div>
                    <div >
                        <img className='max-h-[55vh]' src={Bhoomi_Anime} alt='Bhoomi Picture' />
                    </div>
                </div>
                <div className="min-h-[37vh] border-2 border-violet-200 shadow-2xl  bg-violet-200 grid grid-cols-1 md:grid-cols-3 md:gap-20 items-center text-center mx-[5%] p-[2%] md:min-h-[25vh]">
                <div>
                    <h1 className='text-2xl md:text-3xl font-bold m-4'>Full Stack Web Developer</h1>
                    <p className='text-md'>Developing creative and engaging UI designs using <span>React</span> and proficiency in <span>MERN Stack</span></p>
                </div>
                <div>
                    <h1 className='text-2xl md:text-3xl font-bold m-4'>Programming Languages</h1>
                    <p className='text-md'>Understanding of core languages like <span>C Programming</span> and <span>Java</span></p>
                </div>
                <div>
                    <h1 className='text-2xl md:text-3xl font-bold m-4'>Other Concepts</h1>
                    <p className='text-md'>Familiarity with Linux, DevOps(Docker, Kubernetes), Git, DSA, AI-ML, CN and SQL</p>
                </div>
                </div>
            </div>
        </section>
    )

}

export default Home