import React from 'react'
import Card from '../Card/Card'
import './About.css'
import rea from '../../assets/rea.png'
import frontend from '../../assets/frontend.png'
import hack from '../../assets/hack.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
const About = () => {

    useGSAP(()=>{
        gsap.from(".circle",{
            x:-100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".circle",
                scroll:"body",
                scrub:2,
                markers:false,
                start:"top 60%",
                end:"top 30%"
            }
            
        })
        gsap.from(".line",{
            x:-100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".line",
                scroll:"body",
                scrub:2,
                markers:false,
                start:"top 60%",
                end:"top 30%"
            }
            
        })
        gsap.from(".aboutdetails h1",{
            x:-100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".aboutdetails h1",
                scroll:"body",
                scrub:2,
                markers:false,
                start:"top 60%",
                end:"top 30%"
            }
            
        })
        gsap.from(".aboutdetails ul",{
            y:100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".aboutdetails ul",
                scroll:"body",
                scrub:2,
                markers:false,
                start:"top 60%",
                end:"top 30%"
            }
            
        })
        gsap.from(".rightabout ",{
            x:100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:".rightabout",
                scroll:"body",
                scrub:2,
                markers:false,
                start:"top 60%",
                end:"top 30%"
            }
            
        })
    }) 

  return (
    <div id='about'>
        <div className="leftabout">
            <div className="circle-line">
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
               
            </div>
            <div className="aboutdetails">
                <div className="personalinfo">
                    <h1>Personal Info</h1>
                    <ul>
                        <li>
                            <span>NAME</span> : NEERAJ KUMAR
                        </li>
                        <li>
                            <span>AGE</span> : 20 YEARS
                        </li>
                        <li>
                            <span>GENDER</span> : MALE
                        </li>
                        <li>
                            <span>LANGUAGE KNOWN</span> : HINDI, ENGLISH, PUNJABI
                        </li>
                    </ul>
                </div>

                <div className="education">
                    <h1>Education</h1>
                    <ul>
                        <li>
                            <span>DEGREE</span> : B.TECH
                        </li>
                        <li>
                            <span>BRANCH</span> : COMPUTER SCIENCE & ENGINEERING
                        </li>
                        <li>
                            <span>YEAR</span> : 2021-2025
                        </li>
                       
                    </ul>
                </div>

                <div className="skills">
                    <h1>Skills</h1>
                    <ul>
                        <li>
                           FRONTEND WEB DEVELOPER
                        </li>
                        <li>
                            REACTJS DEVELOPER
                        </li>
                        <li>
                            ETHICAL HACKING
                        </li>
                       
                    </ul>
                </div>
            </div>
        </div>
        <div className="rightabout">
            <Card title="FRONTEND WEB DEVELOPER " image={frontend}/>
            <Card title="REACTJS DEVELOPER" image={rea}/>
            <Card title="ETHICAL HACKING" image={hack}/>

        </div>

    </div>
  )
}

export default About