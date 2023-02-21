import { useState } from "react";

function GeneralAssembly() {
    const [readMore, setReadMore] = useState(false)

    return ( 
       <div className="mx-0 mt-10 min-w-full flex justify-center">
            <div className="m-2 card2">
                <h1>Software Engineering Apprentice</h1>
                <h3>Software Engineering Immersive</h3>
                <p>In the Software Engineering Immersive, I learned how to design and implement websites from the ground up. From modeling the data, to designing wireframes, and finally, connecting functionality with form. My projects challenged me to build websites that could be implemented to meet client needs. Such as implementing Stripe payments, user authorization, and designing databases that meet the needs of businesses. </p>
                {readMore ?
            <>
            <div className="m-2">
                <p>At General Assembly, I finished a four month Software Engineering Immersive bootcamp learning full-stack development.</p>
                <p>Project 1: Designed and created a crawler game using vanilla Javascript, Canvas, HTML and CSS demonstrating basic principles in action.</p>
                <p>Project 2: Designed a personal project management tool using Express, Node.js, SQL, and Bootstrap to integrate databases and front-end frameworks.</p>
                <p>Project 3: Working with a team, we created a food delivery app using React, Express, and MongoDB to practice user authentication and Git workflows.</p>
                <p>Project 4: Designed and programmed a full-stack MERN web application complete with user authentication. Features include payments via Stripe, and browsing movies for rental. </p>
            </div>
                <button onClick={() => setReadMore(false)} className="btn ">Read Less...</button>
            </>
            :
            <button onClick={() => setReadMore(true)} className="btn mx-auto">Read More...</button>   }
            </div>
            
            

        </div>
     );
}

export default GeneralAssembly;