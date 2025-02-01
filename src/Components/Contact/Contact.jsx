import React from 'react'
import './Contact.css'
import contact from '../../assets/contact.png'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
const Contact = () => {
    useGSAP(()=>{
        gsap.from("img ",{
            x:-100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:" img ",
                scroll:"body",
                scrub:2,
                markers:false,
                start:"top 80%",
                end:"top 30%"
            }
            
        })
        gsap.from("form ",{
            x:100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:" form ",
                scroll:"body",
                scrub:2,
                markers:false,
                start:"top 80%",
                end:"top 30%"
            }
            
        })
    })
  return (
    <div id="contact">
        <div className="leftcontact">
            <img src={contact} alt="" />
           
        </div>
        <div className="rightcontact">
       <form action="https://formspree.io/f/myzkjeao" method='POST'>
        <input name="Username" type="text" placeholder='Name' />
        <input name="Email" type="email" placeholder='Email'/>
        <textarea name="message" id="textarea" placeholder='Message Me'></textarea>
        <input type="submit" id='btn' value="submit"/>
        <div className='icon flex text-2xl gap-10 '>
            <a href="https://www.instagram.com/i.neeraj_pb1x?igsh=ZWIzM2I3OGhlc3N0"><FaInstagram className='text-cyan-400 hover:text-cyan-900' /></a>
            <a href="https://github.com/Neeraj-kumar574"><FaGithub className='text-cyan-400 hover:text-cyan-900'/></a>
             <a href="https://www.linkedin.com/in/neeraj-kumar-5976b329a"><FaLinkedin className='text-cyan-400 hover:text-cyan-900'/></a>
            </div>
       </form>
        </div>
    </div>
  )
}

export default Contact