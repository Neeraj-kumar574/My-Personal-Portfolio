
import Card from '../Card/Card'
import nexa from '../../assets/nexa.jpg'
import food from '../../assets/food.jpg'
import talwind from '../../assets/talwind.jpg'
import portfolio from '../../assets/portfolio.jpg'
import {Link} from "react-scroll"
import './Project.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
const Project = () => {
useGSAP(()=>{
    gsap.from("#head ",{
        y:100,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
            trigger:"#head",
            scroll:"body",
            scrub:2,
            markers:false,
            start:"top 80%",
            end:"top 30%"
        }
        
    })
    gsap.from(".slider ",{
        y:100,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
            trigger:".slider",
            scroll:"body",
            scrub:2,
            markers:false,
            start:"top 80%",
            end:"top 30%"
        }
        
    })
})

  return (
   <div  id="project">
    <h1 id='head'>FRONTEND WEB DEVELOPMENT PROJECTS</h1>

<div className="slider">
<a href="https://remarkable-baklava-9fdec4.netlify.app/"><Card className="card" title="NEXA VIRTUAL ASSISTANT" image={nexa} /></a>
<a href="https://deluxe-palmier-ed3f42.netlify.app/"><Card title="FOOD RECIPE WEBSITE" image={food}/></a>
<a href="index.html"><Card title="PERSONAL PORTFOLIO" image={portfolio}/></a>
<a href="https://register-home.vercel.app/"><Card title="TALWINDCSS BASED WEBSITE" image={talwind}/></a>





</div>

   </div>
  )
}

export default Project