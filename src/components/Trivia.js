import './Trivia.css'

export default function Trivia({title, text}){
    
    return(
        <div className='triviaDiv'>
            <h3 className='triviaTitle'>{title}</h3>
            <h4 className='triviaText'>{text}</h4>
        </div>
    )

}