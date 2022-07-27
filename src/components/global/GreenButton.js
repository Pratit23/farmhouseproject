import React from 'react'

/**
 * @description global green button component as it matches our theme
 * @props {string} height - height of button: defaults to 30px
 * @props {string} width - width of button: defaults to 150px
 * @props {string} content - button content
 * @props {} onClick - function to trigger on click
 * @props {} style - any custom style (optional)
 * 
*/
function GreenButton(props) {
    const {
        height = "30px",
        width = "150px",
        content = "Learn more",
        style = {},
        onClick = () => { },
        bg = 'green',
        textColor = "white",
    } = props;
    return (
        <div className={`text-xs bg-${bg} text-${textColor} centerChild border-2 border-green`} style={{ height, width, cursor: "pointer", ...style }} onClick={onClick}>
            {content}
        </div>
    )
}

export default GreenButton