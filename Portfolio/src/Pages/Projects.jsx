import project1 from "../assets/BiteCircle.png"
import project2 from "../assets/LiveWeather.png"
import project3 from "../assets/CodeQuizzer.png"
import project4 from "../assets/MovieGallery.png"
import project5 from "../assets/RecipeBook.png"
import project6 from "../assets/Calcy.png"
import project7 from "../assets/PetConnect.png"

function Projects(){

    return(
        <section className="min-h-[90vh] p-[5vh] text-center">
            <h1 className="text-3xl font-bold text-center mb-5">My Work</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-5 place-items-center items-stretch">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="https://github.com/bhoominaik16/BiteCircle---Cooking-Community" target="_blank">
                        <img className="rounded-t-lg" src={project1} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="https://github.com/bhoominaik16/BiteCircle---Cooking-Community" target="_blank">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BiteCircle</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A platform that supports AI recipe search and other features for cooking enthusiasts</p>
                        <a href="https://github.com/bhoominaik16/BiteCircle---Cooking-Community" class="px-5 py-2.5 relative rounded group font-medium text-white inline-block"  target="_blank">
                            <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                            <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                            <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                            <span class="relative flex items-center justify-center">Visit Project
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </span>
                            
                        </a>
                        
                    </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="https://react-weather-app-mauve-five.vercel.app/" target="_blank">
                        <img className="rounded-t-lg" src={project2} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="https://react-weather-app-mauve-five.vercel.app/" target="_blank">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">LiveWeather</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A Web Application for live weather updates with statistical data.</p>
                        <a href="https://react-weather-app-mauve-five.vercel.app/" class="px-5 py-2.5 relative rounded group font-medium text-white inline-block"  target="_blank">
                            <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                            <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                            <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                            <span class="relative flex items-center justify-center">Visit Project
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="https://react-quiz-app-git-main-bhoomi-naiks-projects.vercel.app/" target="_blank">
                        <img className="rounded-t-lg" src={project3} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="https://react-quiz-app-git-main-bhoomi-naiks-projects.vercel.app/" target="_blank">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CodeQuizzer</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A Quiz app where users can attempt quizzes and get a score.</p>
                        <a href="https://react-quiz-app-git-main-bhoomi-naiks-projects.vercel.app/" class="px-5 py-2.5 relative rounded group font-medium text-white inline-block"  target="_blank">
                            <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                            <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                            <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                            <span class="relative flex items-center justify-center">Visit Project
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="https://react-movie-gallery-gamma.vercel.app/" target="_blank">
                        <img className="rounded-t-lg" src={project4} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="https://react-movie-gallery-gamma.vercel.app/" target="_blank">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Movie Gallery</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A website generating a list of movies and their information</p>
                        <a href="https://react-movie-gallery-gamma.vercel.app/" class="px-5 py-2.5 relative rounded group font-medium text-white inline-block"  target="_blank">
                            <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                            <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                            <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                            <span class="relative flex items-center justify-center">Visit Project
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="https://react-recipe-book-tau.vercel.app/" target="_blank">
                        <img className="rounded-t-lg" src={project5} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="https://react-recipe-book-tau.vercel.app/" target="_blank">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Recipe Book</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A platform designed to generate recipes and their details based on ingredient search.</p>
                        <a href="https://react-recipe-book-tau.vercel.app/" class="px-5 py-2.5 relative rounded group font-medium text-white inline-block"  target="_blank">
                            <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                            <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                            <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                            <span class="relative flex items-center justify-center">Visit Project
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="https://react-calculator-three-ashy.vercel.app/" target="_blank">
                        <img className="rounded-t-lg" src={project6} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="https://react-calculator-three-ashy.vercel.app/" target="_blank">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Calculator</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A basic calculator designed using React and Tailwind CSS </p>
                        <a href="https://react-calculator-three-ashy.vercel.app/" class="px-5 py-2.5 relative rounded group font-medium text-white inline-block"  target="_blank">
                            <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                            <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                            <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                            <span class="relative flex items-center justify-center">Visit Project
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="https://bhoominaik16.github.io/PetConnect_/" target="_blank">
                        <img className="rounded-t-lg" src={project7} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="https://bhoominaik16.github.io/PetConnect_/" target="_blank">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PetConnect</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A platform designed to connect Pet adopters with NGO’s.</p>
                        <a href="https://bhoominaik16.github.io/PetConnect_/" class="px-5 py-2.5 relative rounded group font-medium text-white inline-block"  target="_blank">
                            <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                            <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                            <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                            <span class="relative flex items-center justify-center">Visit Project
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Projects