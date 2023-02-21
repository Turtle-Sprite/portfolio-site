import { useEffect, useState } from 'react';
import AnimatedLetters from '../../partials/AnimatedLetters'

function AnimatedAbout() {
    const [letterClass2, setLetterClass2] = useState('text-animate')
    const nameArray = [' ', 'C', 'r', 'y', 's', 't', 'a', 'l', ' ']
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass2('text-animate-hover')
        }, 1000)
    }, [])
    return (
        <h1>
            <span className={letterClass2}>H</span>
            <span className={`${letterClass2} _12`}>i,</span>
            <br />
            <span className={`${letterClass2} _13`}>I</span>
            <span className={`${letterClass2} _14`}>'m</span>

            <AnimatedLetters
                letterClass={letterClass2}
                strArray={nameArray}
                idx={15}
            />
            <br />
            <AnimatedLetters
                letterClass={letterClass2}
                strArray={jobArray}
                idx={22}
            />

        </h1>
    );
}

export default AnimatedAbout;