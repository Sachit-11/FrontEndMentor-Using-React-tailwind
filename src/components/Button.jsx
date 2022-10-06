function Button({setRating, number}){
    return(
        <button onClick = {() => {setRating(number)}}className = "bg-gray-700 h-10 w-10 pt-1 rounded-full text-gray-200 hover:bg-gray-400 focus:bg-[color:var(--orange)]">{number}</button>
    );
};

export default Button;