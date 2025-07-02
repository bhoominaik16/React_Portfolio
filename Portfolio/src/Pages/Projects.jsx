function Projects(){

    return(
        <section className="min-h-[90vh] p-[5vh] text-center">
            <h1 className="text-3xl font-bold text-center mb-5">My Work</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-5 place-items-center">
                <div className="h-[30vh] w-[30vw] md:w-[14vw] border border-violet-300 rounded-lg">
                    <h1 className="h-[25vh] md:h-[20vh] p-4 flex items-center justify-center ">A simple functional calculator built using React and Tailwind CSS</h1>
                    <button className="bg-violet-300 border border-violet-300 rounded-b-lg h-[5vh] md:h-[10vh] w-full text-xl hover:animate-pulse"><a href="http://" target="_blank">Visit Site</a></button>
                </div>
                <div className="h-[30vh] w-[30vw] md:w-[14vw] border border-violet-300 rounded-lg">
                    <h1 className="h-[25vh] md:h-[20vh] p-4 flex items-center justify-center">A BootStrap based website 'PetConnect' built to help Pet Animals</h1>
                    <button className="bg-violet-300 border border-violet-300 rounded-b-lg h-[5vh] md:h-[10vh] w-full text-xl hover:animate-pulse"><a href="https://bhoominaik16.github.io/PetConnect_/" target="_blank">Visit Site</a></button>
                </div>
                <div className="h-[30vh] w-[30vw] md:w-[14vw] border border-violet-300 rounded-lg">
                    <h1 className="h-[25vh] md:h-[20vh] p-4 flex items-center justify-center">A To-Do List Web application built using BootStrap and JavaScript</h1>
                    <button className="bg-violet-300 border border-violet-300 rounded-b-lg h-[5vh] md:h-[10vh] w-full text-xl hover:animate-pulse"><a href="https://bhoominaik16.github.io/HTML-to-do-List/" target="_blank">Visit Site</a></button>
                </div>
                <div className="h-[30vh] w-[30vw] md:w-[14vw] border border-violet-300 rounded-lg">
                    <h1 className="h-[25vh] md:h-[20vh]  p-4 flex items-center justify-center">A BootStrap based hotel Blog project.</h1>
                    <button className="bg-violet-300 border border-violet-300 rounded-b-lg h-[5vh] md:h-[10vh] w-full text-xl hover:animate-pulse"><a href="https://bhoominaik16.github.io/Hotel-Vrindavan/" target="_blank">Visit Site</a></button>
                </div>
            </div>
        </section>
    )

}

export default Projects