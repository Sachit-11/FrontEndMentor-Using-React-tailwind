import star from '../assets/icon-star.svg'
import Button from './Button.jsx'
import ThankYou from './ThankYou.jsx'
import {useState} from 'react'

function Ratingbar(){

    const [Submitted, setSubmitted] = useState(false)
    const [Rating, setRating] = useState("")

    return(
        <>
            {!Submitted &&
                <div className = "w-96 h-96 rounded-3xl p-8 bg-gradient-to-b from-[color:var(--dark-blue)] to-[color:var(--very-dark-blue)]">
                    <img className = "bg-gray-700 rounded-full p-3" src = {star} alt = 'Loading'></img>
                    <h1 className='text-white text-2xl pt-6 pb-2'>
                        How did we do?
                    </h1>
                    <p className = 'text-[color:var(--medium-grey)] text-sm mb-6'>
                        Please let us know how we did with your support request. All feedback is appreciated 
                        to help us improve our offering!
                    </p>
                    <ul className='grid grid-cols-5 gap-3 mb-10'>
                        <li>
                            < Button setRating = {setRating} number = {1}/>
                        </li>
                        <li>
                            < Button setRating = {setRating} number = {2}/>
                        </li>
                        <li>
                            < Button setRating = {setRating} number = {3}/>
                        </li>
                        <li>
                            < Button setRating = {setRating} number = {4}/>
                        </li>
                        <li>
                            < Button setRating = {setRating} number = {5}/>
                        </li>
                    </ul>
                    <button onClick = {() => setSubmitted(true)} className = "bg-[color:var(--orange)] tracking-wide w-full text-center pt-3 pb-2 text-white uppercase rounded-full" type = "submit">SUBMIT</button>
                </div>
            }

            {Submitted && <ThankYou Rating = {Rating} setSubmitted = {setSubmitted}/>}

        </>
    );
};

export default Ratingbar;