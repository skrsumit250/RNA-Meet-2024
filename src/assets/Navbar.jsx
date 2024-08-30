import '../style.css';
import '../styling.css';
import { useState } from 'react';
function Navbar(){
    const [click,setClick] = useState(false);
    const toggleButtons = ()=>{
        setClick(!click);
    }
    return(
        <>
            <nav>
                <img src="/IITG.jpg" id="logo"></img>
                <ul id="large-ul">
                    <li><a href="/">HOME</a></li>
                    <li><a href="/program">PROGRAM</a></li>
                    <li><a href="/speakers">SPEAKERS</a></li>
                    <li><a href="/form">REGISTRATION</a></li>
                </ul>
                <div className="toggle">
                    {!click && <button id="button1" onClick={toggleButtons}><img src="/menu.png"></img></button>}
                    {click && <><button id="button2" onClick={toggleButtons}><img src="/close.png"></img></button>
                    <ul id="small-ul">
                        <li><a href="index.html">HOME</a></li>
                        <li><a href="program.html">PROGRAM</a></li>
                        <li><a href="speaker.html">SPEAKERS</a></li>
                        <li><a href="form.html">REGISTRATION</a></li>
                    </ul></>
                    }
                </div>
            </nav>
            {/* <!-- Banner  --> */}
            <div className="banner">
                <img src="/BG.jpg" alt=""></img>
                <div className="cover"></div>
                <div className="heading">
                    <h1>12<sup>th</sup> RNA GROUP MEETING</h1>
                    <h3>IIT GUWAHATI, 22-24 MAY 2024</h3>
                </div>
            </div>
        </>
    )
}
export default Navbar