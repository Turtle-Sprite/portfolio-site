import { AiOutlineDown } from "react-icons/ai";
import { useState } from "react";

function Teaching() {
    const [readHill, setReadHill] = useState(false)
    const [readVUS, setReadVUS] = useState(false)
    const [readView, setReadView] = useState(false)

    return (
        <>
            <div className="mt-4 mx-2 card2" >
                <h1>Teaching Experience</h1>
                <p>I spent over 4 years teaching and traveling around the world. The majority of my experience is captured below.</p>
            </div>

            <div className="card mx-2" onClick={() => setReadHill((prev) => !prev)}>
                <div className="flex">
                    <AiOutlineDown className="w-7 h-7 mt-1 mr-2" />
                    <h3>Homeroom Teacher</h3>
                </div>
                {readHill ?
                    <>
                        <h4>June 2021 - July 2022</h4>
                        <h4>Hillside Collegiate Jr., Busan, South Korea</h4>
                        <p>I taught homeroom in an International School setting with children from ages 5-7. </p>
                        <li>Designed and executed lessons for six and seven year old learners with a hands-on approach to both social and educational materials.</li>
                        <li>Created a variety of teaching materials to accommodate different learning styles.</li>
                        <li>Provided extensive individual feedback for student evaluation.</li>
                        <li>Prepared extra-curricular activities and monitored field trips for students.</li>
                    </> : null}
            </div>

            <div className="mx-2 card" onClick={() => setReadVUS((prev) => !prev)}>
                <div className="flex">
                    <AiOutlineDown className="w-7 h-7 mt-1 mr-2"  />
                    <h3>EFL Teacher</h3>
                </div>
                {readVUS ?
                    <>
                        <h4>June 2018 - November 2018</h4>
                        <h4>VUS, Hanoi, Vietnam</h4>
                        <li>Created learning materials and lesson plans based on age group and learning style.</li>
                        <li>Conducted placement tests for incoming students and implemented testing for class progress and evaluation. </li>
                    </> : null}
            </div>
            <div className="mx-2 card" onClick={() => setReadView((prev) => !prev)}>
                <div className="flex">
                    <AiOutlineDown className="w-7 h-7 mt-1 mr-2"  />
                    <h3>EFL Teacher</h3>
                </div>

                {readView ?
                    <>
                        <h4>November 2016 - April 2018</h4>
                        <h4>Viewhigh Language Institute, Geoje, South Korea</h4>
                        <li>Delivered engaging and informative lessons on English grammar, spelling, vocabulary, and pronunciation.</li>
                        <li>Carefully selected and organized course materials for each group of students.</li>
                        <li>Continually explored and incorporated new teaching methods, strategies, and activities.</li>
                    </> : null}
            </div>

        </>
    );
}

export default Teaching;