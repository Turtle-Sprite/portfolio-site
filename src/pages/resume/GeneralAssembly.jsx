import { useState } from "react";
import Programmer from "../../images/RedShirt.png"

function GeneralAssembly() {
    const [readMore, setReadMore] = useState(false)
    const [hidden, setHidden] = useState(false)

    return ( 
       <div className="mx-0 mt-10 min-w-full flex-col justify-center">
        <div className='resume-recent'>
        <div className="m-4">
            <h1>Recent Experience</h1>
            <img className="img-resume" src={Programmer} alt="Writing Code" />
        </div>
            <div className="m-2 card2 text-left">
                <h1>Software Engineering Apprentice</h1>
                <h3>Software Engineering Immersive at General Assembly </h3>
                <h4>November 2022 - February 2023</h4>
                <p>In the Software Engineering Immersive, I learned how to design and implement websites from the ground up. From modeling the data, to designing wireframes, and finally, connecting functionality with form. My projects challenged me to build websites that could be implemented to meet client needs. Such as implementing Stripe payments, user authorization, and designing databases that meet the needs of businesses. </p>
                <button onClick={() => {
                    setReadMore(true) 
                    setHidden(true)}} 
                    className={`btn mx-auto ${hidden ? "hidden" : null}`}> Read More...</button> 
                </div>
        </div>
                {readMore  &&
            <>
            <div className="m-2 card2 text-left resume-list">
                <p>At General Assembly, I finished a four month Software Engineering Immersive bootcamp learning full-stack development.</p>
                <li>Project 1: Designed and created a crawler game using vanilla Javascript, Canvas, HTML and CSS demonstrating basic principles in action.</li>
                <li>liroject 2: Designed a liersonal project management tool using Express, Node.js, SQL, and Bootstrap to integrate databases and front-end frameworks.</li>
                <li>Project 3: Collaborating with a team, we created a food delivery app using React, Express, and MongoDB to practice user authentication and Git workflows.</li>
                <li>Project 4: Designed and programmed a full-stack MERN web application complete with user authentication. Features include payments via Stripe, and browsing movies for rental. </li>
                <button onClick={() => {
                    setReadMore(false)
                    setHidden(false)
                }} className="btn ">Read Less...</button>
            </div>
            </>
            }
                 
        </div>
     );
}

export default GeneralAssembly;