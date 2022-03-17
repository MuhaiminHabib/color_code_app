const Button = ({isDarkText, setIsDarkText}) => {
    return (
        <button 
            onClick={() => setIsDarkText(!isDarkText)}>
                {isDarkText? "Make Text White" : "Make Text Black"}
        </button>
    )
}

export default Button;