
import { Instagram, Mail, Linkedin, Github } from 'lucide-react';
import {useState} from 'react'


function Contact(){

    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[contact, setContact] = useState("")
    const[message, setMessage] = useState("")

    function handlename(event) {
        setName(event.target.value)
    }
    function handleemail(event) {
        setEmail(event.target.value)
    }
    function handlecontact(event) {
        setContact(event.target.value)
    }
    function handlemessage(event) {
        setMessage(event.target.value)
    }

    function alertmsg() {
        alert("Message is submitted successfully! We will get back to you soon.")
        setName("")
        setEmail("")
        setContact("")
        setMessage("")
    }
    return(
        <section className='min-h-[90vh]  text-center'>
            <div className='p-[5vh]'>
                <h1 className='text-2xl font-bold'>Feel free to Contact me</h1>
                <div className='md:w-[20vw] grid grid-cols-4 gap-1 mx-auto text-center place-items-center my-[4vh]'>
                    <a href='https://www.instagram.com/bhoomi_naik16/' target='_blank'><Instagram size={32} /></a>
                    <a href="mailto:bhoominaik16@gmail.com" target="_blank" rel="noopener noreferrer"><Mail size={32} /></a>
                    <a href="https://www.linkedin.com/in/bhoomi-naik-4a84222a2/" target='_blank'><Linkedin size={32} /></a>
                    <a href="https://github.com/bhoominaik16" target='_blank'><Github size={32} /></a>
                </div>
                <div className='md:w-[30vw] grid grid-cols-1 gap-4 place-items-center md:mx-auto p-[2vh] border border-violet-300 rounded-xl '>
                    <h4 className='text-xl font-semibold'>For any Queries</h4>
                    <input type="text" name='name' value={name} onChange={handlename} placeholder='Enter your name' className='h-fit w-[50vw] md:w-[20vw] p-2 border rounded-xl' required/>
                    <input type="email" name='email' value={email} onChange={handleemail} placeholder='Enter your email' className='h-fit w-[50vw] md:w-[20vw] p-2 border rounded-xl' required/>
                    <input type="number" name='contact' value={contact} onChange={handlecontact} placeholder='Enter your contact ' className='h-fit w-[50vw] md:w-[20vw] p-2 border rounded-xl'/>
                    <textarea name="message" value={message} onChange={handlemessage} placeholder='Enter the message' className='h-fit w-[50vw] md:w-[20vw] p-2 border rounded-xl' required/>
                    <button type='submit' className='h-fit w-fit text-xl font-semibold py-2 px-4 bg-purple-800 text-white rounded-lg' onClick={alertmsg}>Submit</button>
                </div>
            </div>
        </section>
    )

}

export default Contact