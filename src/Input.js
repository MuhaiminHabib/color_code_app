import colorNames from 'colornames';
import Button from './Button';

const Input = ({ colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText}) => {
    return (
        <form onSubmit={(e) => {e.preventDefault()}}>
            <label htmlFor="input__text">Enter Color Name</label>
            <input 
                type="text"
                required
                autoFocus
                id="input__text"
                placeholder = "Enter Color Name"
                value={colorValue}
                onChange = {(e) => {
                    setColorValue(e.target.value)
                    setHexValue(colorNames(e.target.value))}} />
            <Button 
                isDarkText={isDarkText}
                setIsDarkText={setIsDarkText}
            />
        </form>
    )
}

export default Input;