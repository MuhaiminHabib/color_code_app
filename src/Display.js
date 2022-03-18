const Display = ({ colorValue, hexValue, isDarkText}) => {
    return (
        <div  className = "displayBox"
            style={{backgroundColor: colorValue? colorValue : "Empty Value"}}>
                <p style={{color: isDarkText? "#000" : "#fff"}}>
                    <span className="colorNameOutput">{colorValue? colorValue : "Empty Value"}</span>
                    <span className="hexValueOutput">{hexValue? hexValue : null}</span>
                </p>
        </div>
    )
}

Display.defaultProps = {
    colorValue: "Empty Color Value"
}

export default Display;