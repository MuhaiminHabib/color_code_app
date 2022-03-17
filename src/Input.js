import colorNames from 'colornames';

const Input = ({ colorValue, setColorValue, setHexValue}) => {
    return (
        <form onSubmit={(e) => {e.preventDefault()}}>
            <label htmlFor="input__text">Enter Color Name</label>
            <input 
                type="text"
                required
                autoFocus
                placeholder = "Enter Color Name"
                value={colorValue}
                onChange = {(e) => {
                    setColorValue(e.target.value)
                    setHexValue(colorNames(e.target.value))}} />
        </form>
    )
}

export default Input;