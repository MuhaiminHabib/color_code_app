const Display = ({ colorValue, hexValue}) => {
    return (
        <p  className = "displayBox"
            style={{backgroundColor: colorValue}}>
                { colorValue? colorValue : "Empty Value" }
                { hexValue? hexValue : null }
        </p>
    )
}

Display.defaultProps = {
    colorValue: "Empty Color Value"
}

export default Display;