const Display = ({ colorValue, hexValue, isDarkText}) => {
    return (
        <p  className = "displayBox"
            style={{
                backgroundColor: colorValue,
                color: isDarkText ? "#000" : "#FFF"}}>
                    { colorValue? colorValue : "Empty Value" }
                    { hexValue? hexValue : null }
        </p>
    )
}

Display.defaultProps = {
    colorValue: "Empty Color Value"
}

export default Display;