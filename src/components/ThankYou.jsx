import thankyou from '../assets/illustration-thank-you.svg'

const ThankYou = ({Rating, setSubmitted}) => {
    return(
        <div className = "w-96 h-96 rounded-3xl p-8 bg-gradient-to-b from-[color:var(--dark-blue)] to-[color:var(--very-dark-blue)] flex flex-col items-center">
            <img className = "mb-7" src = {thankyou} alt = 'Loading'></img>
            <div className = "text-[color:var(--orange)] tracking-wide rounded-full bg-gray-700 pt-1 pb-1 pl-4 pr-4 mb-9">You selected {Rating} out of 5</div>
            <h1 className='text-white text-2xl mb-3'>
                Thank You!
            </h1>
            <p className = 'text-[color:var(--medium-grey)] text-sm text-center mb-2'>
                We appreciate you taking the time to give a rating. If you ever need more support, 
                don't hesitate to get in touch!
            </p>
            <button onClick = {() => {setSubmitted(false)}} className = "bg-[color:var(--orange)] tracking-wide text-center pt-2 pb-1 text-white uppercase rounded-full w-full" type = "submit">RATE AGAIN</button>
        </div>

        // or (the difficult way)

        // <div className = "w-96 h-96 rounded-3xl p-8 bg-gradient-to-b from-[color:var(--dark-blue)] to-[color:var(--very-dark-blue)]">
        //     <img className = "m-auto mb-8" src = {thankyou} alt = 'Loading'></img>
        //     <div className = "text-[color:var(--orange)] tracking-wide w-48 h-8 rounded-full m-auto text-center bg-gray-700 pl-2 pr-2 pt-1 mb-6">You selected 4 out of 5</div>
        //     <h1 className='text-white text-2xl pt-6 pb-2 mb-1 text-center'>
        //         Thank You!
        //     </h1>
        //     <p className = 'text-[color:var(--medium-grey)] text-sm mb-6'>
        //         We appreciate you taking the time to give a rating. If you ever need more support, 
        //         don’t hesitate to get in touch!
        //     </p>
        //     <button onClick = { () => {setSubmitted(true)}} className = "bg-[color:var(--orange)] tracking-wide  text-center pt-2 pb-1 text-white uppercase rounded-full w-full" type = "submit">RATE AGAIN</button>
        // </div>
    );
};

export default ThankYou;