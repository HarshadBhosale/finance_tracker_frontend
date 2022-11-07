import React from "react";
import HomeStyles from "./home_styles";

const Home = () => {
    return(
        <div style={HomeStyles.HomeMessage}>
            Made with&nbsp;<p style={HomeStyles.Heart}>&hearts;</p>&nbsp;by harshosale. 
        </div>
    );
}

export default Home;