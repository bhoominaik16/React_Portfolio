import Bhoomi_Anime from '../assets/Bhoomi_Anime.png'
import {Link} from 'react-router-dom'

function Home(){

    return(
        <section className='xl:max-h-[90vh] md:p-[5vh] p-[2vh]'>
            <div >
                <div className="min-h-[43vh] md:min-h-[55vh] mx-auto bg-white flex items-center md:items-center justify-center ">
                    <div className='max-w-[50%]'>
                        <h3 className='text-xl'>I am Bhoomi Naik</h3>
                        <h1 className='text-4xl md:text-6xl text-wrap font-bold max-w-[80%] mb-4'>An Aspiring Engineer from Mumbai</h1>
                        <Link to={'/Pages/Contact'} ><button className="px-5 py-2.5 relative rounded group font-medium text-white inline-block">
                            <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                            <span className="relative flex items-center justify-center">Reach Me Out</span>
                        </button></Link>
                    </div>
                    <div >
                        <img className='max-h-[55vh]' src={Bhoomi_Anime} alt='Bhoomi Picture' />
                    </div>
                </div>
                <div className="min-h-[50vh] border-2 border-violet-200 shadow-2xl  bg-violet-200 grid grid-cols-1 md:grid-cols-3 md:gap-20 items-center text-center mx-[5%] p-[2%] md:min-h-[25vh]">
                <div>
                    <h1 className='text-2xl md:text-3xl font-bold m-4'>Full Stack Web Developer</h1>
                    <p className='text-md'>Developing creative and engaging UI designs using <span className='font-semibold'>React</span> and gaining proficiency in <span className='font-semibold'>MERN Stack</span></p>
                </div>
                <div>
                    <h1 className='text-2xl md:text-3xl font-bold m-4'>Programming Languages</h1>
                    <p className='text-md'>Understanding of core languages like <span className='font-semibold'>C Programming</span>, <span className='font-semibold'>Javascript</span> and <span className='font-semibold'>Python</span></p>
                </div>
                <div>
                    <h1 className='text-2xl md:text-3xl font-bold m-4'>Other Concepts</h1>
                    <p className='text-md'>Familiarity with <span className='font-semibold'>Linux, DevOps(Docker, Kubernetes, Agile Methodologies), Git, OS, DBMS, CN and SQL</span></p>
                </div>
                </div>
            </div>
        </section>
    )

}

export default Home