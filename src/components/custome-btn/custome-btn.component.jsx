import React from 'react'

const CustomeButton = ({children, isGoogleSignIn, ...otherProps}) => {
    return (
    <button tyle="submit" className={`custom-button ${isGoogleSignIn ? "google-sign-in" : ""}`} {...otherProps}>
        {children}
        </button>
    )
}
export default CustomeButton;