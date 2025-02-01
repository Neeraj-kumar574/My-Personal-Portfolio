import React from 'react'
import boy1 from "../../assets/boy.png"
import TypingEffect from "react-typing-effect"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import './Home.css'
const Home = () => {

    useGSAP(()=>{
        let tl1 = gsap.timeline()
        tl1.from(".line1",{
            y:100,
            duration:1,
            opacity:0
        })
        tl1.from(".line2",{
            y:100,
            duration:1,
            opacity:0,
            
        })
        tl1.from(".line3",{
            y:80,
            duration:1,
            opacity:0,
          
        })
        tl1.from(".righthome ",{
            x:80,
            duration:1,
            opacity:0,
          
        })
        
    })

  return (
    <div id='home'>
<div className="lefthome">
    <div className="homedetails">
        <div className="line1">I'M</div>
        <div className="line2">NEERAJ KUMAR </div>
        <div className="line3">
            <TypingEffect
            text={["FRONT END DEVELOPER", "WEB DEVELOPER", "REACTJS DEVELOPER "]}
            speed={50}
            eraseSpeed={100}
            eraseDelay={500}
            cursor="|"

            />
        </div>
        <button>HIRE ME</button>
    </div>
</div>
<div className="righthome">
    <img src={boy1} alt="image" />
</div>

    </div>
  )
}

export default Home