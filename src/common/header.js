import React from "react";
import HeaderStyles from "./header_styles";


const Header = ({
    setError = () => {},
    isSigned = false,
}) => {
    return(
        <div style={HeaderStyles.Header}>
            <div style={HeaderStyles.Logo}>
                <h1>Harshosale</h1>
            </div>
            {
                isSigned ?
                (<div style={HeaderStyles.UserProfile}>
                    User Profile
                </div>) :
                null
            }
        </div>
    );
}

export default Header;