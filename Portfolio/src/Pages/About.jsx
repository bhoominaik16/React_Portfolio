import { useState } from "react"

function About(){

    const [activetab, setActiveTab] = useState('education')

    return(
        <section className="min-h-[90vh] p-[5vh] text-center">
            <div className="grid md:grid-cols-5 p-2 border border-violet-300 rounded-lg place-items-center md:w-[70vw] mx-auto ">
                <h1 className=" text-3xl font-bold my-2">About Me</h1>
                <p className="md:col-span-4 text-lg text-start">A passionate and dedicated aspiring Software Engineer seeking internship opportunities to leverage my web
                development expertise and problem-solving abilities in building innovative and impactful software solutions. As a
                diligent and goal-oriented individual, I bring strong skills in time management, leadership, teamwork,
                communication, and creativity, coupled with a commitment to contributing effectively to dynamic and challenging
                projects.
                </p>
            </div>
            <div className="grid md:grid-cols-6 md:min-h-[50vh] border border-violet-300 rounded-lg place-items-center md:w-[70vw] mx-auto my-5">
                <div className=" md:col-span-2 w-full p-5 grid grid-cols-3 md:grid-cols-1 gap-8 text-2xl font-semibold">
                    <button className="cursor-pointer hover:text-3xl" onClick={() => setActiveTab('education')}><h1>Education</h1></button>                    
                    <button className="cursor-pointer hover:text-3xl" onClick={() => setActiveTab('skills')}><h1>Skills</h1></button>                 
                    <button className="cursor-pointer hover:text-3xl" onClick={() => setActiveTab('experience')}><h1>Experience</h1></button>
                </div>
                <div className="border-t-2 md:border-t-0 md:border-l-2 h-full w-full border-violet-300 p-5 md:col-span-4 text-left">
                    {activetab === 'education' && (
                        <div >
                        <div className="mx-2 my-5">
                            <ul>
                                <li className="text-xl font-bold">Bachelor Of Engineering, B.E. - Information Technology(2023-2027)</li>
                                <ol>
                                    <li>Vivekanand Education Society's Institute if Technology, Chembur, Mumbai.</li>
                                    <li>Current C.G.P.A. - <span className="font-bold">8.84</span></li>
                                </ol>
                            </ul>
                        </div>
                        <div className="mx-2 my-5">
                            <ul>
                                <li className="text-xl font-bold">H.S.C./12th - Science(2023)</li>
                                <ol>
                                    <li>Pen Private High School and Junior College, Pen, Raigad.</li>
                                    <li>Percentage. - <span className="font-bold">87.88%</span></li>
                                </ol>
                            </ul>
                        </div>
                        <div className="mx-2 my-5">
                            <ul>
                                <li className="text-xl font-bold">S.S.C./10th - (2021)</li>
                                <ol>
                                    <li>P.S.M.S. English Medium School, Pen, Raigad.</li>
                                    <li>Percentage. - <span className="font-bold">94.80%</span></li>
                                </ol>
                            </ul>
                        </div>
                    </div>
                    )}
                    {activetab === 'skills' && (
                        <div >
                        <div className="mx-2 my-5">
                            <ul className="grid grid-cols-2 gap-5">
                                <div>
                                    <li className="text-xl font-bold">Programming Languages:</li>
                                    <ol>
                                        <li>C Programming</li>
                                        <li>Java</li>
                                        <li>SQL</li>
                                        <li>HTML</li>
                                        <li>CSS(Bootstrap, Tailwind)</li>
                                        <li>Javascript(React)</li>
                                    </ol>
                                </div>
                                <div>
                                    <li className="text-xl font-bold">Core Concetps:</li>
                                    <ol>
                                        <li>DBMS</li>
                                        <li>DevOps(Docker, Kubernetes)</li>
                                        <li>Git/GitHub</li>
                                        <li>DSA</li>
                                        <li>Operating System(Linux)</li>
                                        <li>Computer Networks</li>
                                    </ol>
                                </div>
                            </ul>
                        </div>
                    </div>
                    )}
                    {activetab === 'experience' && (
                        <div>
                        <div className="mx-2 my-5">
                            <ul>
                                <li className=" text-xl font-bold">Web Development Front-end Intern - by Raise Digital</li>
                                <ol>
                                    <li>(Mar 2024 - Apr 2024)</li>
                                </ol>
                            </ul>
                        </div>
                        <div className="mx-2 my-5">
                            <ul>
                                <li className=" text-xl font-bold">Web Full Stack Development Virtual Internship - Eduskills</li>
                                <ol>
                                    <li>(Apr 2025 - Jun 2025)</li>
                                </ol>
                            </ul>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default About