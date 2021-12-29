import React from "react";
import '../custom-button/custom-button.styles.scss';

function CustomButton ({children, ...OtherProps}){
    return(
        <button className="custom-button" {...OtherProps}>
            {children}
        </button>
    )
}

export default CustomButton;